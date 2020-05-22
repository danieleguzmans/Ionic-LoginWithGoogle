import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  private restaurantes: Entry<any>[] = [];

  constructor( private contentful: ContentfulService) { }

  ngOnInit() {

    this.contentful.getRestaurantes()
    .then( restaurantes => {
      this.restaurantes = restaurantes;
      console.log(restaurantes)
    });
  }

}
