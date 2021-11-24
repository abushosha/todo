import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  },
  {
    path: 'todo-list',
    loadChildren: () => import('src/app/common/todo-list/todo-list.module').then((m) => m.ToDoListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
