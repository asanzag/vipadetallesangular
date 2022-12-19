import { Component, Input, OnInit } from '@angular/core';
import { Diseno } from 'src/app/models/diseno';

@Component({
  selector: 'app-diseno',
  templateUrl: './diseno.component.html',
  styleUrls: ['./diseno.component.scss']
})
export class DisenoComponent implements OnInit {

  @Input() diseno!: Diseno;

  constructor() {}

  ngOnInit(): void {
  }
}
