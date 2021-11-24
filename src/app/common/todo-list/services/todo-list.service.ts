import { ToDo } from 'src/app/core/models/todo.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

type EntityArrayResponseType = HttpResponse<ToDo[]>;

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  toDoUrl = 'https://jsonplaceholder.typicode.com/todos';
  
  constructor(private http: HttpClient) { }

  GetAllToDoList(req?: any): Observable<any> {
    return this.http.get<ToDo[]>(this.toDoUrl, { params: req, observe: 'response' }).pipe(map(res => res?.body.slice(0, 10)))
  }
}
