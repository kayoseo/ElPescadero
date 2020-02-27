import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { Producto } from '../Modelos/productos';
import { Categoria } from '../Modelos/categoria.model';




@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos: Array<Producto>;
  constructor(private CarritoServicio: CarritoService) {
    this.productos = [new Producto(1, 'Choritos',2300,'','','','../../assets/1.jpeg','100 gr'),
    new Producto(1, 'Camarones',12212,'','','','../../assets/2.jpg','200gr de camarones pelados'),
    new Producto(1, 'Surtido de mariscos',10000,'','','','../../assets/3.jpg','500gr'),];
    // for(let producto of this.productos)
    // {
    // this.AgregarAlCarro(producto);
    // }
    //console.log(this.producto);

  }

  ngOnInit(): void {
  }

  AgregarAlCarro(item: Producto) {
    this.CarritoServicio.addItemToBasket(item);
  }

}
