import {Component, OnInit} from '@angular/core';
import {TodoListService} from "../../services/todo-list.service";
import {TodoList} from "./Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{



  todoList!  : Array<TodoList>;
  constructor(private todoService : TodoListService) {

  }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(data=> {
      this.todoList = data;
    })
  }


  allTodos(){
    this.todoService.getTodoList().subscribe(data=>{
      this.todoList = data;
    })
  }

  selectedTodos() {
    this.todoService.getTodoListSelected().subscribe(data=>{
      this.todoList = data;
    },error => {
      console.log(error)})
  }


  handleSelect(id : number,todo : TodoList){
    todo.selected =! todo.selected;
    this.todoService.updateTodo(id,todo).subscribe(data=>{
      console.log(data)
      this.allTodos();
    })
  }
  dueDateTodo(){
    this.todoService.getTodoListSorted().subscribe(data=>{
      this.todoList = data;
    },error => {
      console.log(error)
    })
  }

  unselectedTodos() {
    this.todoService.getTodoListSelectedFalse().subscribe(data=>{
      this.todoList = data;
    },error => {
      console.log(error)
    })
  }

  deleteTodo(id: number) {
    let c = confirm("Are you sure ?");
    if (c) {
      this.todoService.deleteTodo(id).subscribe(data => {
        alert("Deleted")
        this.allTodos();
      })
    }
  }
}
