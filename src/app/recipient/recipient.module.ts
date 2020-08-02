import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MaterializeButtonModule, MaterializeNavbarModule } from 'materialize-angular';
import { CookieService } from "angular2-cookie/services/cookies.service";

import { RecipientComponent } from './recipient/recipient.component';
import { RecipientListComponent } from './recipient-list/recipient-list.component';


@NgModule({
  declarations: [RecipientComponent, RecipientListComponent],
  exports: [
    RecipientListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    MaterializeButtonModule,
    MaterializeNavbarModule,
    HttpClientModule,
  ]
})
export class RecipientModule { }

