import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
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
import { DonorReceiptComponent } from './donor-receipt/donor-receipt.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { MailMessageComponent } from './mail-message/mail-message.component';
import { MailComponent } from './mail/mail.component';
import { SmsComponent } from './sms/sms.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

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
    ViewImageComponent,
    DonorReceiptComponent,
    ImagesComponent,
    VideosComponent,
    MailMessageComponent,
    MailComponent,
    SmsComponent,
    ForgotPasswordComponent
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
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [ViewImageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
