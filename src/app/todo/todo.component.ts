import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from './todo'

import { TodoListComponent } from './todo-list.component'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
public todo: Todo;
@Output() clicked = new EventEmitter<Todo>();
  constructor() { ;
    this.todo=new Todo("due","00/00/0000");
   }

  ngOnInit() {
  }
onClicked() {;
  this.clicked.emit(this.todo)
}
}

