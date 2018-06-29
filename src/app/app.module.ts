import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  MatDialogModule, MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
} from '@angular/material';


import { SearchPipe } from './search.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

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
import { VideosListComponent } from './videos-list/videos-list.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { AddcommitteememberComponent } from './addcommitteemember/addcommitteemember.component';
import { CommitteememberlistComponent } from './committeememberlist/committeememberlist.component';
import { ViewImageComponent } from './view-image/view-image.component';

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
    AddImageComponent,
    VideosListComponent,
    AddVideoComponent,
    AddStudentComponent,
    StudentlistComponent,
    AddstaffComponent,
    StafflistComponent,
    AddcommitteememberComponent,
    CommitteememberlistComponent,
    SearchPipe,
    ViewImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [ViewImageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
