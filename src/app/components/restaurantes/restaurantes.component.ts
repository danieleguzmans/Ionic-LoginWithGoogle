import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
})
export class RestaurantesComponent implements OnInit {

  @Input() restaurantes: Entry<any>[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
