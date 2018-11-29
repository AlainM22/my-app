import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Fruta } from '../../model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

  fruta: Fruta;

  constructor() { 
    console.trace('FrutaCardComponent constructor');
    this.fruta = new Fruta();

    this.fruta.nombre = 'Malacaton';
    this.fruta.calorias = 17.4;
    this.fruta.precio = 3.45;
    this.fruta.oferta = true;
    this.fruta.color = ['rojo', 'amarillo', 'verde'];
    this.fruta.descuento = 10;
    this.fruta.imagen = 'https://pbs.twimg.com/profile_images/486884835571408897/iZnw1lBq_400x400.png';
  }

  ngOnInit() {
    console.trace('FrutaCardComponent ngOnInit');
  }

  comprar(){
    console.trace('FrutaCardComponent comprar');
    alert(`Lo sentimos pero de momento tenemos esta opcion deshabilitada ## ${this.fruta.nombre}`);
  }

}
