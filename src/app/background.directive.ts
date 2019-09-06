import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appBackground]"
})
export class BackgroundDirective implements OnInit {
  @Input("appBackground") bgColor: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setBackgroundColor(this.bgColor);
  }

  setBackgroundColor(value: string) {
    this.el.nativeElement.style.backgroundColor = value;
  }
}
