import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  
  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this._productoService.getProductos().subscribe(
      data => {
        console.log(data);
        this.listProductos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  eliminarProducto(id: any): void {
    this._productoService.eliminarProducto(id).subscribe(data => {
        this.obtenerProductos();
      },
      error => {
        console.log(error);
      }
    );
  }
}
