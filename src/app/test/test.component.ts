import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent
  implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit {
  constructor() {}

  ngOnInit() {
    console.log("#onInit");
  }

  ngOnDestroy(): void {
    console.log("#ngOnDestroy");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("#ngOnChanges");
  }
  ngAfterContentInit(): void {
    console.log("#ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    console.log("#ngAfterViewInit");
  }
}
