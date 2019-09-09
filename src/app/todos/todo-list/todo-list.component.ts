import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TodoService } from "../todo.service";
import { TodoList } from "./todo-list.model";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
  // providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  todos: Observable<TodoList>;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.todos = this.service.get();
  }
}
