import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';


@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  frutas: Fruta[];
  f1: Fruta;
  f2: Fruta;
  precioTotal: number;
  cantidad: number;
  carrito: Fruta[];

  /* FrutaService es @Injectable por lo cual debemos declararlo en el constructor, 
    nunca haremos NEW y no usarlo dentro del constructor, mejor en ngOnInit */

  constructor(public frutaService: FrutaService) {
    console.trace('ComparadorComponent constructor');
    this.frutas = [];
    this.f1 = new Fruta();
    this.f2 = new Fruta();

    this.precioTotal = 27.58;
    this.cantidad = 3;
    this.carrito = [];

  }

  ngOnInit() {
    console.trace('ComparadorComponent ngOnInit');
    this.frutas = this.frutaService.getAll();

    this.f1 =  this.frutas[0];
    this.f2 =  this.frutas[1];
  }

  seleccionar( fruta: Fruta ) {
    console.trace('ComparadorComponent seleccionar %o', fruta);
    this.f2 = this.f1;
    this.f1 = fruta;
  }

  getTotal(): number{
    let total = 0;
    this.carrito.forEach( el => {
      total += el.precio * el.cantidad;
    })
    return total;
  }

  /*sumarProducto(p: Producto, index: number){    
    p.cantidad++;
    this.carrito[index] = p;
  }*/

  /*restarProducto(p: Producto, index: number){
    if ( p.cantidad > 1 ){
      p.cantidad--;
      this.carrito[index] = p;
    }else{
      this.eliminarProducto(p, index);
    }
  }*/

  /*eliminarProducto(p: Producto, index: number){
    p.cantidad = 1;
    this.carrito.splice(index,1);
  }*/

  actualizarCarro( event: Event) {
    console.debug('ComparadorComponent actualizarCarro recibimos evento del componente hijo');
    let frutaClick = event['frutaClick'];
    console.debug('Parametro frutaClick = %o' , frutaClick );
    let f = this.carrito.find( f => f.nombre === frutaClick.nombre);
    if ( f ){
      f.cantidad ++;
      let index = this.carrito.indexOf(frutaClick);
      this.carrito[index]= f;      
    }else{
      this.carrito.push(frutaClick);
    }  
  }

}
