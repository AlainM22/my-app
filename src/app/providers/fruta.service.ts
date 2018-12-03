import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Fruta } from '../model/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  endPoint: string = "http://localhost:3000/frutas";

  constructor(public http: HttpClient) { 
    console.log('FrutaService constructor');
  }

  getAll(): Observable<any> {
    console.trace('FrutaService getAll');
    return this.http.get(this.endPoint);
  }
}
