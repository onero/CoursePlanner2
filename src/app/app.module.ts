import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';

import { AppComponent } from './app.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view.component';
import {AuthService} from "./auth/auth.service";
import {UserService} from "./users/user.service";
import {AuthGuard} from "./auth/auth-guard";

export const firebaseConfig = {
  apiKey: "AIzaSyCLNW3bMvfgU4ANnJNKMHWVvaDDt61saio",
  authDomain: "courseplanner2-d2177.firebaseapp.com",
  databaseURL: "https://courseplanner2-d2177.firebaseio.com",
  storageBucket: "courseplanner2-d2177.appspot.com",
  messagingSenderId: "187566028244"
};

export const firebarebaseLoginConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    HomeComponent,
    LoginComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebarebaseLoginConfig)
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
