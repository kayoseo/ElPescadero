import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from '../Modelos/productos';
import { CarritoService } from '../servicios/carrito.service';


@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  subscription: Subscription;

  public carrito: Array<Producto> = [];
  constructor(private CarritoServicio: CarritoService) { }
  public resultado: any;
  ngOnInit(): void {
    this.subscription = this.CarritoServicio.addItemToBasket$.subscribe(

      item => {

        this.resultado = item;
        this.carrito.push(this.resultado);
        //aquí tenemos el ítem seleccionado por el usuario en el componente que nos interesa y podemos reaccionar como aplique… 
        console.log(this.carrito);
      });
    
  }
}


