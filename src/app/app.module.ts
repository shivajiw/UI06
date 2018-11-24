import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComComponent } from './my-comp/MyCom.component';
import { MyTest } from './my-test/my-test';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { DirectiveComponent } from './directive/directive.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'directive', component: DirectiveComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyComComponent, 
    MyTest, 
    FirstComponent, DirectiveComponent, NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


