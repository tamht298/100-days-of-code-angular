import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from "./hello/hello.component";
import {FormsModule} from "@angular/forms";
import {ProgressBarComponent} from "./progress-bar/process-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
