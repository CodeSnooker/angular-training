import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-child",
  templateUrl: "./view-child.component.html",
  styleUrls: ["./view-child.component.css"]
})
export class ViewChildComponent implements OnInit {
  name = "Japan";

  constructor() {}

  ngOnInit() {}

  testInVC() {
    console.log("I am printing from VC");
  }
}
