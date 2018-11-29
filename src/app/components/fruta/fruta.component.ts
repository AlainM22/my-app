import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {
  // Atributos declarar y no inicializar
  titulo: string;
  frutas: Fruta[];
  precioTotal: number;
  nombreFrutas: string[];
  frutasOferta: Fruta[]
  frutasColorRojo: Fruta[];
  primeraFrutaOferta: Fruta;
  primeraFrutaOfertaVerde: Fruta;


  constructor() {
    console.trace('FrutaComponent constructor');
    this.titulo = 'fruta';
    this.loadFrutas();

    // programacion funcional
    this.precioTotal = this.frutas.map(el => el.precio).reduce((c, p) => c + p);
    this.nombreFrutas = this.frutas.map(el => el.nombre);
    this.frutasOferta = this.frutas.filter(el => el.oferta);
    //this.frutasColorRojo = ;
    this.primeraFrutaOferta = this.frutas.find(f => f.oferta);
    this.primeraFrutaOfertaVerde = this.frutas.find(f => f.oferta && (f.color.find(color => color === 'Verde') === 'Verde'));
  }

  ngOnInit() {
    console.trace('FrutaComponent ngOnInit');
  }

  loadFrutas(): any {
    console.trace('FrutaComponent loadFrutas');
    this.frutas = [];
    let f: Fruta = new Fruta();
    f.nombre = "banana";
    f.precio = 3.15;
    f.calorias = 500;
    f.color = ["amarillo", "negro"];
    f.oferta = true;
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = "pera";
    f.precio = 2;
    f.calorias = 350;
    f.color = ["amarillo", "verde"];
    f.oferta = false;
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = "fresa";
    f.precio = 0.75;
    f.calorias = 100;
    f.color = ["rosa", "rojo","verde"];
    f.oferta = true;
    this.frutas.push(f);
  }

}
