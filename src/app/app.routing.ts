// Importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una página exclusiva
import { HomeComponent } from "./components/home/home.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { disenosComponent } from "./components/disenos/disenos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { PruebasComponent } from "./components/pruebas/pruebas.component";
import { ErrorComponent } from "./components/error/error.component";
import { FiguraComponent } from "./components/figura/figura.component";
import { FiguraNewComponent } from "./components/figura-new/figura-new.component";
import { FiguraEditComponent } from "./components/figura-edit/figura-edit.component";

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'disenos', component: disenosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'pruebas', component: PruebasComponent},
    {path: 'pruebas/figura/:id', component: FiguraComponent},
    {path: 'crear', component: FiguraNewComponent},
    {path: 'pruebas/editar/:id', component: FiguraEditComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);