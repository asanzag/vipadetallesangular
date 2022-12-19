import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VipaDetallesAngular';
  onActivate() {
    window.scroll(0, 0);
    console.log("Se acaba de instanciar una nueva ruta");
  }
}
