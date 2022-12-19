import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FiguraService } from 'src/app/services/figura.service';
import { Figura } from 'src/app/models/figura';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-figura',
  templateUrl: './figura.component.html',
  styleUrls: ['./figura.component.scss'],
  providers: [FiguraService]
})
export class FiguraComponent implements OnInit {

  public figura!: Figura;
  public url: string;
  
  constructor(
    public _figuraService: FiguraService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._figuraService.getFigura(id).subscribe(
        response => {
          if(response.figura){
            this.figura = response.figura;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );

    });
    
  }

  delete(id: string){

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Una vez borrado, no podrás recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._figuraService.delete(id).subscribe(
          response => {
            Swal.fire(
              '¡Borrado!',
              'Tu figura se ha borrado.',
              'success'
            )
            this._router.navigate(['/pruebas']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/pruebas']);
          }
        );
      }else{
        Swal.fire(
          'Tranquilo!',
          'Tu figura NO se ha borrado.',
          'success'
        )
      }
    })

    
  }

}
