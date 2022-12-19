import { Injectable } from "@angular/core";
import { Diseno } from "../models/diseno";

@Injectable()
export class DisenoService{

    public disenos: Diseno[];

    constructor(){
        this.disenos = [
            new Diseno("Bola Mamá Navidad", 2019, '../../../assets/images/diseño1.png'),
            new Diseno("Hueso y huella", 2018, '../../../assets/images/diseño2.png'),
            new Diseno("Botines", 2015, '../../../assets/images/diseño3.png')
          ];
    }

    holaMundo(){
        return 'Esto es un servicio de Diseño';
    }

    getDisenos(){
        return this.disenos;
    }
}