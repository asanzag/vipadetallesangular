import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Figura } from "../models/figura";
import { Global } from "./global";

@Injectable()
export class FiguraService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas(){
        return "Soy el servicio de figuras !!!";
    }

    getFiguras(last:any = null):Observable<any>{

        var figuras = 'figuras';

        if(last != null){
            figuras = 'figuras/true';
        }

        return this._http.get(this.url+figuras);
    }

    getFigura(figuraId: string):Observable<any>{
        return this._http.get(this.url+'figura/'+figuraId)
    }

    create(figura: Figura):Observable<any>{
        //let params = JSON.stringify(figura);
        //let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save', figura);
    }

    update(id: string, figura: Figura):Observable<any>{
        let params = JSON.stringify(figura);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'figura/'+id, params, {headers:headers});
    }

    delete(id: string): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url+'figura/'+id, {headers:headers});
    }


}