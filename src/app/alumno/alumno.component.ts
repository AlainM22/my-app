import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  titulo: string;
  alumnos: string[];

  constructor() { 
    console.trace('AlumnoComponent constructor');
    this.titulo = 'alumno';
    this.alumnos = ['Luis', 'Andrea', 'Raul', 'Adriana', 'Adrian', 'Alain', 'Asier', 'Valeria', 'Ainara']
  }

  ngOnInit() {
    console.trace('AlumnoComponent ngOnInit');
  }

}
