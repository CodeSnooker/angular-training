import { Component } from "@angular/core";
import { ParentChild } from "./parent-child.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cookbook-demo";
  children: ParentChild[] = [
    {
      master: "Paras",
      name: "Ashira"
    },
    {
      master: "Paras",
      name: "Ruhi"
    },
    {
      master: "Paras",
      name: "Mani"
    }
  ];

  onParentTouched(agreed: boolean) {
    console.log("agreed => ", agreed);
  }
}
