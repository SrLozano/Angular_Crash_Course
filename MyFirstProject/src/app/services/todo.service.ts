import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http:HttpClient) { }

  getTodos(){ //We are going to add the URL as a property to this server

  }
}
