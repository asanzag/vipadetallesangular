import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Figura } from 'src/app/models/figura';
import { FiguraService } from 'src/app/services/figura.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-figura-edit',
  templateUrl: '../figura-new/figura-new.component.html',
  styleUrls: ['./figura-edit.component.scss'],
  providers: [FiguraService]
})
export class FiguraEditComponent implements OnInit {

  public figura!: Figura;
  public status!: string;
  public user: any;
  public is_edit: boolean;
  public page_title: string;
  public url: string;
  
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: 50,
    uploadAPI: {
      url: Global.url + 'upload-image/'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para la figura...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
    }

  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _figuraService: FiguraService
  ) {
    this.figura = new Figura('','','','', '', null);
    this.is_edit = true;
    this.page_title = 'Editar figura';
    this.url = Global.url;
    this.user = {
      nombre: '',
      email: '',
      descripcion: ''
    };
  }

  ngOnInit(): void {
    this.getFigura();
  }

  onSubmit(){
    this._figuraService.update(this.figura._id, this.figura).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.figura = response.figura;

          // Alerta
          Swal.fire(
            'Figura editada!!!',
            'La figura se ha editado correctamente',
            'success'
          );

          this._router.navigate(['/pruebas/figura', this.figura._id]);
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        Swal.fire(
          'Edición fallida!!!',
          'La figura no se ha editado correctamente',
          'error'
        );
      }
    );
  }

  imageUpload(data:any){
    this.figura.image = data.body.image;
  }

  getFigura(){
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

}
