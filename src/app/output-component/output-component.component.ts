import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-output-component",
  templateUrl: "./output-component.component.html",
  styleUrls: ["./output-component.component.css"]
})
export class OutputComponentComponent implements OnInit {
  @Output() atChildButtonTouch = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  local_touched(agreed: boolean) {
    this.atChildButtonTouch.emit(agreed);
    console.log("Button Clicked");
  }
}
