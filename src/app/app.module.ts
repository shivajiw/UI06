import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyComComponent } from './my-comp/MyCom.component';
import { MyTest } from './my-test/my-test';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { DirectiveComponent } from './directive/directive.component';
import { NavComponent } from './nav/nav.component';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { ChildComponent } from './parentchild/child-component/ChildComponent';
import { ServiceexampleComponent } from './serviceexample/serviceexample.component';

import { ApplicationService } from './applicationservice';
import { PipesComponent } from './pipes/pipes.component';

const appRoutes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'parent/child', component: ParentchildComponent },
  { path: 'service', component: ServiceexampleComponent },
  { path: 'pipes', component: PipesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyComComponent, 
    MyTest, 
    FirstComponent,
    DirectiveComponent,
    NavComponent,
    ParentchildComponent, 
    ChildComponent, ServiceexampleComponent, PipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }


