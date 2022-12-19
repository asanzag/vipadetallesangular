import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { Figura } from 'src/app/models/figura';
import { FiguraService } from 'src/app/services/figura.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-figura-new',
  templateUrl: './figura-new.component.html',
  styleUrls: ['./figura-new.component.scss'],
  providers: [FiguraService]
})
export class FiguraNewComponent implements OnInit {

  public figura!: Figura;
  public status!: string;
  public user: any;
  public page_title: string;
  public url: string;
  public is_edit: boolean;
  
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
    this.figura = new Figura('','','', '', '', null);
    this.page_title = 'Crear figura';
    this.url = Global.url;
    this.is_edit = true;
    this.user = {
      nombre: '',
      email: '',
      descripcion: ''
    };
  }


  ngOnInit(): void {
  }

  onSubmit(){
    this._figuraService.create(this.figura).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.figura = response.figura;

          // Alerta
          Swal.fire(
            'Figura creada!!!',
            'La figura se ha creado correctamente',
            'success'
          );

          this._router.navigate(['/pruebas']);
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data:any){
    this.figura.image = data.body.image;
  }

}