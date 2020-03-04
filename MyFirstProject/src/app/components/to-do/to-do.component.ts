import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from '../../models/Todo' //In order to import stuff from other folders

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todos:Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

}
