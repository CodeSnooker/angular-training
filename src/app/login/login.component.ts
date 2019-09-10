import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  name = new FormControl("");
  password = new FormControl("");

  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    console.log("#onSubmit");
    const canLogin = this.service.login(this.name.value, this.password.value);
    console.log("canLogin => ", canLogin);
    if (canLogin) {
      this.router.navigate(["/users"]);
    }
  }

  onLogout() {
    this.service.logout();
    this.router.navigate(["/"]);
  }
}
