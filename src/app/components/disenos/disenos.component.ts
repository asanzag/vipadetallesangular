import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { Diseno } from 'src/app/models/diseno';
import { DisenoService } from 'src/app/services/diseno.service';

@Component({
  selector: 'disenos',
  templateUrl: './disenos.component.html',
  styleUrls: ['./disenos.component.scss'],
  providers: [DisenoService]
})
export class disenosComponent implements OnInit, DoCheck {

  public titulo: string;
  public disenos: Diseno[];

  constructor(
    private _disenoService: DisenoService
  ){
    this.titulo = "Componente disenos";
    this.disenos = this._disenoService.getDisenos();
  }

  ngOnInit(): void {
    console.log("Componente iniciado!!!");
    console.log(this._disenoService.holaMundo());
  }

  ngDoCheck(): void {
    console.log("DOCHECK LANZADO!!!");
  }
  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(){
    console.log("EL COMPOENTE SE VA A ELIMINAR!!!");
  }

}
