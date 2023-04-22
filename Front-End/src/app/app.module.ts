import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LoginComponent} from "./login/login.component";
import { AppComponent } from './app.component';
import {RegisterComponent} from "./register/register.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {Router, RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
      RegisterComponent,
      LoginComponent,
      NavbarComponent,
      HomeComponent
  ],
  imports: [
      RouterModule.forRoot(routes),
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
