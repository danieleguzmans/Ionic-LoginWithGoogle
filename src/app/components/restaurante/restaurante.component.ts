import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss'],
})
export class RestauranteComponent implements OnInit {

  @Input() restaurante: Entry<any>;

  constructor() { }

  ngOnInit() {}

}
