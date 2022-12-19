import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { disenosComponent } from './components/disenos/disenos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeadergeneralComponent } from './components/headergeneral/headergeneral.component';
import { DisenoComponent } from './components/diseno/diseno.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { FigurasComponent } from './components/figuras/figuras.component';
import { FiguraComponent } from './components/figura/figura.component';
import { FiguraNewComponent } from './components/figura-new/figura-new.component';
import { FiguraEditComponent } from './components/figura-edit/figura-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SliderComponent,
    FooterComponent,
    NosotrosComponent,
    disenosComponent,
    ContactoComponent,
    HomeComponent,
    ErrorComponent,
    HeadergeneralComponent,
    DisenoComponent,
    PruebasComponent,
    FigurasComponent,
    FiguraComponent,
    FiguraNewComponent,
    FiguraEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
