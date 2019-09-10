import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.css"]
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    aliases: this.fb.array([this.fb.control("", Validators.required)])
  });

  constructor(private fb: FormBuilder) {}

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control("", Validators.required));
  }

  ngOnInit() {}

  onSubmit() {}
}
