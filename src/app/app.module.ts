import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MaterializeButtonModule, MaterializeNavbarModule } from 'materialize-angular';
import { CookieService } from "angular2-cookie/services/cookies.service";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    MaterializeButtonModule,
    MaterializeNavbarModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
