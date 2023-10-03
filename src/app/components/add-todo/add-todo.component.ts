import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoListService} from "../../services/todo-list.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TodoList} from "../todo-list/Todo";
import {Observable} from "rxjs";
import {TodoListComponent} from "../todo-list/todo-list.component";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{

  @Output() todoItem = new EventEmitter<any>();

  addTodoForm! : FormGroup;

  constructor(private todoService: TodoListService, private fb : FormBuilder , private todoList : TodoListComponent) {
  }
  ngOnInit(): void {
    this.addTodoForm = this.fb.group({
      title : this.fb.control(""),
      dueDate : this.fb.control(null)
    });
  }

  handleAddTodo() {
    let todo : TodoList = this.addTodoForm.value;
    this.todoService.addTodo(todo).subscribe(todo=>{
      alert("Added !");
      this.todoItem.emit(todo);
      this.addTodoForm.reset();
      this.todoList.allTodos();
    })
  }



}
