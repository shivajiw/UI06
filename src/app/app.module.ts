import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyComComponent } from './my-comp/MyCom.component';

import { MyTest } from './my-test/my-test';

@NgModule({
  declarations: [
    AppComponent,
    MyComComponent, 
    MyTest
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
