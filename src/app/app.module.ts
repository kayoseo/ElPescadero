import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import {routing, appRoutingProviders} from './app.routing';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { OfertasComponent } from './ofertas/ofertas.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ClientesComponent,
    ProductosComponent,
    OfertasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
