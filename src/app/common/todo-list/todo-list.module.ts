import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { ScreenTodoListComponent } from './components/screen-todo-list/screen-todo-list.component';
import { ScreenAddTodoComponent } from './components/screen-add-todo/screen-add-todo.component';
import { CurrentDateComponent } from './components/screen-todo-list/current-date/current-date.component';


@NgModule({
  declarations: [
    ScreenTodoListComponent,
    ScreenAddTodoComponent,
    CurrentDateComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ],
  exports: [
    ScreenAddTodoComponent,
    CurrentDateComponent
  ]
})
export class ToDoListModule { }
