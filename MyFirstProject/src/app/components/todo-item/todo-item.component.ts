import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core'; //It's necessary to add the input
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //Set Dynamic Classes when we have a task complete
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes
  } 

  // OnToggle
  onToggle(todo){
    todo.completed = !todo.completed;
    console.log('toggle'); //Just to check that is called
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }

  //On Delete
  onDelete(todo){
    this.deleteTodo.emit(todo);
    console.log('Deleted');
  }
}
