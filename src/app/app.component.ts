import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ParentChild } from "./parent-child.interface";
import { ViewChildComponent } from "./view-child/view-child.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ViewChildComponent, { static: false })
  private vc: ViewChildComponent;

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

  constructor() {}

  ngAfterViewInit(): void {
    this.vc.testInVC();
    console.log("Name of view child ", this.vc.name);
  }

  onParentTouched(agreed: boolean) {
    console.log("agreed => ", agreed);
  }
}
