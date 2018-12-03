import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  endPoint: string = "http://localhost:3000/tareas";

  constructor(public http: HttpClient) { 
    console.trace('TareaService constructor');
  }

  getAll(): Observable<any>{
    console.trace('TareaService getAll');
    return this.http.get(this.endPoint);
  }

}
