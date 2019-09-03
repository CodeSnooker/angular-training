import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { OutputComponentComponent } from './output-component/output-component.component';
import { LocalVariableComponent } from './local-variable/local-variable.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InputComponentComponent,
    OutputComponentComponent,
    LocalVariableComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
