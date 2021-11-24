import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenTodoListComponent } from './components/screen-todo-list/screen-todo-list.component';

const routes: Routes = [

  {
    path: '',
    component: ScreenTodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
