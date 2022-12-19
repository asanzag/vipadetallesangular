import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() nombre:string;

  constructor() {
      this.nombre = 'Detalles hechos a mano, totalmente personalizados. Para info y pedidos, manda un mensaje directo.';
   }
  
  ngOnInit() {

  }

}
