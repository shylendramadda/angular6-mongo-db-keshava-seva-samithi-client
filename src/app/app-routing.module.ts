import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component'
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DonateComponent } from './donate/donate.component';
import { VatsalyasindhuComponent } from './vatsalyasindhu/vatsalyasindhu.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { DonorComponent } from './donor/donor.component';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { ImageListComponent } from './image-list/image-list.component';
import { AddImageComponent } from './add-image/add-image.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'vatsalyaSindhu', component: VatsalyasindhuComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'adminHome', component: AdminhomeComponent,
    children: [{
      path: 'registrations', component: RegistrationsComponent,
      children: [{ path: 'donorList', component: DonorlistComponent }]
    }, {
      path: 'images', component: ImageListComponent,
      children: [{ path: 'addImage', component: AddImageComponent }]
    }, {
      path: 'videos', component: VideosListComponent,
      children: [{ path: 'addVideo', component: AddVideoComponent }]
    }]
  },
  { path: 'donor', component: DonorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }