import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


//importar componentes 
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { OfertasComponent } from './ofertas/ofertas.component';



const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'ofertas', component: OfertasComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 