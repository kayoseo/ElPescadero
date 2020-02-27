export class Producto {
  id: number;
  nombre: string;
  precio: string;
  disponible: boolean;
  oferta: boolean;
  categoria: number;
  imagen: string;
  descripcion: string;

  constructor(id, nombre, precio, disponible, oferta,
    categoria, imagen, descripcion) {
      this.id= id;
      this.nombre= nombre;
      this.precio= precio;
      this.disponible= disponible;
      this.oferta= oferta;
      this.categoria= categoria;
      this.imagen= imagen;
      this.descripcion= descripcion;

  }
}
