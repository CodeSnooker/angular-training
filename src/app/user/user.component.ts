import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}

  userId = 2;

  ngOnInit() {
    console.log("Users #init");
    this.route.params.subscribe(d => {
      console.log("Params => ", d);
    });
  }

  ngOnDestroy(): void {
    console.log("Users #destroy");
  }
}
