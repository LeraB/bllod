import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorFormComponent } from './donor/donor-form/donor-form.component';
import { DonorsMainComponent } from './donor/donors-main/donors-main.component';
import { RecipientMainComponent } from './recipient/recipient-main/recipient-main.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DonorModule} from './donor/donor.module';
import {RecipientModule} from './recipient/recipient.module';
import { DonorsInfoComponent } from './donors-info/donors-info.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent}, 
  { path: 'donors-list', component: DonorsMainComponent },
  { path: 'recipients-list', component: RecipientMainComponent },
  { path: 'new-demand', component: DonorFormComponent },
  { path: 'register', component: RegisterComponent },
{ path: 'donors-info', component: DonorsInfoComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, CommonModule, DonorModule, RecipientModule],
  declarations: [
    DonorFormComponent,
    HomeComponent,
    DonorsMainComponent,
    RecipientMainComponent,
    DonorsInfoComponent
],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
