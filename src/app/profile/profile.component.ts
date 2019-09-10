import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../todos/todo.service";
import { Todo } from "../todos/todo/todo.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit, OnDestroy {
  todo: Todo;

  constructor(
    private router: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    console.log("Profile #init");
    this.router.params.subscribe(params => {
      console.log("Profile Params => ", params);
      this.todoService.getById(params.id).subscribe(d => {
        this.todo = d;
        console.log("Todo Results", d);
      });
    });
  }

  ngOnDestroy(): void {
    console.log("Profile #destroy");
  }
}
