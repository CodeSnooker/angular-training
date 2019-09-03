import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-local-variable",
  templateUrl: "./local-variable.component.html",
  styleUrls: ["./local-variable.component.css"]
})
export class LocalVariableComponent implements OnInit {
  protected jumbo = "I am not a jumbo";

  constructor() {}

  ngOnInit() {}
}
