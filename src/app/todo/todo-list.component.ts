import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';

import { TodoComponent } from './todo.component';

import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
public todos : Todo[]=JSON.parse(localStorage.getItem("savedData")) || [];

public todo: Todo;

  constructor(private localStorageService: LocalStorageService) { 
  
}

  ngOnInit() {
  }


onClicked(todo1)
{
             var entry = {
                'task': todo1.task,
                'date': todo1.date                
            };
  this.todos.push(entry);
  
 localStorage.setItem("savedData", JSON.stringify(this.todos));

 
 

}
          

}
