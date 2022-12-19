import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public user: any;

  constructor() {
    this.user = {
      nombre: '',
      email: '',
      descripcion: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario enviado!!!");
    console.log(this.user);
  }

  hasDadoClick(){
    alert('Has dado click!!!');
  }

}
