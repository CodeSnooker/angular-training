import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent implements OnInit, OnDestroy {
  profileEditForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl("")
    })
  });

  private formChangeSub: Subscription;

  constructor() {}

  ngOnInit() {
    // this.formChangeSub = this.profileEditForm.controls.firstName.valueChanges.subscribe
    this.formChangeSub = this.profileEditForm.valueChanges.subscribe(d => {
      if (this.profileEditForm.controls.firstName.valid) {
        // this.profileEditForm.controls.lastName.set
      }
      // console.log("On Changes => ", );
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileEditForm.value);
  }

  ngOnDestroy(): void {
    this.formChangeSub.unsubscribe();
  }
}
