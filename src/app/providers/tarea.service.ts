import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../model/tarea';

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

  add(tarea: Tarea): Observable<any>{
    let body = {
      "titulo": tarea.titulo,
      "terminado": tarea.terminado
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(this.endPoint, body, httpOptions);
  }

  delete(id: number): Observable<any>{
    let uri = this.endPoint + "/" + id;
    console.log('TareaService delete ${uri}');
    return this.http.delete(uri);
  }

  marcarTerminado(tarea: Tarea): Observable<any>{
    let uri = this.endPoint + "/" + tarea.id;
    let body = {
      "terminado": !tarea.terminado
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch(uri, body, httpOptions);
  }

}
