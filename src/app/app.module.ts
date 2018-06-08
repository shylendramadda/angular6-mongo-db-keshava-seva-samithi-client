import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { DonateComponent } from './donate/donate.component';
import { VatsalyasindhuComponent } from './vatsalyasindhu/vatsalyasindhu.component';
import { FooterComponent } from './footer/footer.component';
import { DonorComponent } from './donor/donor.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RegistrationsComponent } from './registrations/registrations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    ContactusComponent,
    DonateComponent,
    VatsalyasindhuComponent,
    FooterComponent,
    DonorComponent,
    AdminhomeComponent,
    RegistrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
