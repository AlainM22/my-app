import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  autor: string; 

  constructor() {
    console.trace('Home constructor');
    this.title = "Welcome to";
    this.autor = "Alain";
  }

  ngOnInit() {
    console.trace('Home ngOnInit');
  }

}
