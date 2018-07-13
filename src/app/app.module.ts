import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import {RadioButtonModule} from 'primeng/radiobutton';
import { StaffComponent } from './staff/staff.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    AdminComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    AppRoutingModule,
    RadioButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
