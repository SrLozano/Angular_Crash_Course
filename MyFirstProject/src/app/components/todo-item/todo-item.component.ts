import { Component, OnInit, Input} from '@angular/core'; //It's necessary to add the input
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

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
    todo.complete = !todo.completed;
    console.log('toggle'); //Just to check that is called
  }

  onDelete(todo){

    console.log('Deleted');
  }
}
