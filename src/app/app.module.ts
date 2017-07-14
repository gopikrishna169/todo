import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { HeaderComponent } from './header.component';
import { TodoListComponent } from './todo/todo-list.component';
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HeaderComponent,
    TodoListComponent,
    TodoListComponent,
    

  ],
  imports: [
    BrowserModule,
 
    FormsModule,
    HttpModule,
     LocalStorageModule.withConfig({
            prefix: 'first-app',
        //  storageType: 'localStorage'
            storageType: 'sessionStorage'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
