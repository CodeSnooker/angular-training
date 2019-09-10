import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "dashboard", redirectTo: "/" },
  {
    path: "users",
    component: UserComponent,

    children: [
      { path: "registration", component: RegistrationComponent },
      { path: ":id", component: ProfileComponent, pathMatch: "full" },
      { path: ":id/edit", component: UserEditComponent, pathMatch: "full" }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
