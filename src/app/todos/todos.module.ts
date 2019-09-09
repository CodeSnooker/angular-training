import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoService } from "./todo.service";
import { TodoComponent } from "./todo/todo.component";

@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [CommonModule],
  exports: [TodoListComponent],
  providers: [TodoService]
})
export class TodosModule {}
