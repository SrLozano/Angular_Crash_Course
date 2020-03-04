import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: 'https://jsonplaceholder.typecode.com/todos';

  constructor(private http:HttpClient) { }

  getTodos () {
    return [ //This is an array with all the todo task we are going to create
     {
       id: 1,
       title: 'To Do One',
       completed: false,
     },
     {
      id: 2,
      title: 'To Do Two',
      completed: true,
    } ,
    {
      id: 3,
      title: 'To Do Three',
      completed: false,
    }
    ]
  }
}
