import { Component, OnInit } from '@angular/core';
import { FiguraService } from 'src/app/services/figura.service';
import { Figura } from 'src/app/models/figura';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss'],
  providers: [FiguraService]
})
export class PruebasComponent implements OnInit {

  public figuras!: Figura[];
  public url: string;

  constructor(
    private _figuraService: FiguraService
  ){
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._figuraService.getFiguras().subscribe(
      response => {
        if(response.figuras){
          this.figuras = response.figuras;
        }else{
          
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
