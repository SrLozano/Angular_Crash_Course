import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo' //In order to import stuff from other folders

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todos:Todo[];
  constructor() { }

  ngOnInit(): void {
    this.todos = [ //This is an array with all the todo task we are going to create
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
