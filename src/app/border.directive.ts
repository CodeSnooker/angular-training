import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appBorder]"
})
export class BorderDirective implements OnInit {
  @Input() appBorder;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (!this.appBorder || this.appBorder.length === 0) {
      this.appBorder = "red";
    }
    console.log("this.appBorder  = ", this.appBorder);
    this.updateBorder(this.appBorder);
  }

  private updateBorder(color: string) {
    this.el.nativeElement.style.fontWeight = "bold";
    this.el.nativeElement.style.border = "10px solid " + color;
  }
}
