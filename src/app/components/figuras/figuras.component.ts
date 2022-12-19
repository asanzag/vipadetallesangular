import { Component, Input, OnInit } from '@angular/core';
import { Figura } from 'src/app/models/figura';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.scss']
})
export class FigurasComponent implements OnInit {

  public url: string;

  @Input() figuras!: Figura[];

  constructor() {
    this.url = Global.url;
  }


  ngOnInit(): void {
    
  }
}
