import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BackgroundDirective } from "./background.directive";
import { BoldPipe } from "./bold.pipe";
import { BorderDirective } from "./border.directive";
import { HomeComponent } from "./home/home.component";
import { InputComponentComponent } from "./input-component/input-component.component";
import { LocalVariableComponent } from "./local-variable/local-variable.component";
import { LoginComponent } from "./login/login.component";
import { OutputComponentComponent } from "./output-component/output-component.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { TestComponent } from "./test/test.component";
import { TimestampPipe } from "./timestamp.pipe";
import { TodosModule } from "./todos/todos.module";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserComponent } from "./user/user.component";
import { ViewChildComponent } from "./view-child/view-child.component";
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InputComponentComponent,
    OutputComponentComponent,
    LocalVariableComponent,
    ViewChildComponent,
    BackgroundDirective,
    BorderDirective,
    BoldPipe,
    TimestampPipe,
    UserComponent,
    UserListComponent,
    UserEditComponent,
    ProfileComponent,
    ShoppingListComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
