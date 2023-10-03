import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoList} from "../components/todo-list/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

   url : string = "http://localhost:8080/todo";

  constructor(private http : HttpClient) { }


  getTodoList() : Observable<TodoList[]>{
    return this.http.get<TodoList[]>(`${this.url}/todos`);
  }

  updateTodo(id : number , todo : TodoList) : Observable<TodoList>{
    return this.http.put<TodoList>(`${this.url}/update/${id}`,todo);
  }

  geTodo(id :number) : Observable<TodoList>{
    return this.http.get<TodoList>(`${this.url}/${id}`);
  }

  getTodoListSelected(): Observable<TodoList[]>{
    return this.http.get<TodoList[]>(`${this.url}/todoSelected`);
  }

  getTodoListSelectedFalse(): Observable<TodoList[]>{
    return this.http.get<TodoList[]>(`${this.url}/todoFSelected`);
  }

  getTodoListSorted(): Observable<TodoList[]>{
    return this.http.get<TodoList[]>(`${this.url}/todosSorted`);
  }

  addTodo(todo : TodoList): Observable<TodoList>{
    return this.http.post<TodoList>(`${this.url}/add`,todo);
  }

  deleteTodo(id : number){
     return  this.http.delete(`${this.url}/delete/${id}`);
  }





}
