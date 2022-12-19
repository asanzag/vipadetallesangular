import { Component, OnInit } from '@angular/core';
import { Figura } from 'src/app/models/figura';
import { FiguraService } from 'src/app/services/figura.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FiguraService]
})
export class HomeComponent implements OnInit {

  public figuras!: Figura[];

  constructor(
    private _figuraService: FiguraService
  ){}

  ngOnInit(): void {
    this._figuraService.getFiguras(true).subscribe(
      response => {
        if(response.figuras){
          this.figuras = response.figuras;
          console.log(this.figuras);
        }else{
          
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
