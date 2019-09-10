import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BackgroundDirective } from "./background.directive";
import { InputComponentComponent } from "./input-component/input-component.component";
import { LocalVariableComponent } from "./local-variable/local-variable.component";
import { OutputComponentComponent } from "./output-component/output-component.component";
import { TestComponent } from "./test/test.component";
import { TodosModule } from "./todos/todos.module";
import { ViewChildComponent } from "./view-child/view-child.component";
import { BorderDirective } from './border.directive';
import { BoldPipe } from './bold.pipe';
import { TimestampPipe } from './timestamp.pipe';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
    LoginComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, TodosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
