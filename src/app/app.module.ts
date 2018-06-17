import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DonateComponent } from './donate/donate.component';
import { VatsalyasindhuComponent } from './vatsalyasindhu/vatsalyasindhu.component';
import { FooterComponent } from './footer/footer.component';
import { DonorComponent } from './donor/donor.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { ImageListComponent } from './image-list/image-list.component';
import { AddImageComponent } from './add-image/add-image.component';

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
    RegistrationsComponent,
    DonorlistComponent,
    ImageListComponent,
    AddImageComponent
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
