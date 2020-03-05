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
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) { //Delete Function
    console.log('Delete me');
    this.todos = this.todos.filter(t =>t.id !== todo.id); //Delete from the UI
    this.todoService.deleteTodo(todo).subscribe(); //Detele from the server

  }

  addTodo(todo:Todo){
      this.todoService.addTodo(todo).subscribe(todo =>{
      this.todos.push(todo);
    });
  }
}
