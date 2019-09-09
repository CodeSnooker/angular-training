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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InputComponentComponent,
    OutputComponentComponent,
    LocalVariableComponent,
    ViewChildComponent,
    BackgroundDirective
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, TodosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
