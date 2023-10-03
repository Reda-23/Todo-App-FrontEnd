import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {AddTodoComponent} from "./components/add-todo/add-todo.component";

const routes: Routes = [
  {
    path : "todo" , component:TodoListComponent
  },
  {
    path : "addTodo" , component:AddTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
