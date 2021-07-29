import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FasilitasListComponent } from './fasilitas-list/fasilitas-list.component';
import { FasilitasDetailComponent } from './fasilitas-detail/fasilitas-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FasilitasBookingComponent } from './fasilitas-booking/fasilitas-booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UpdateFasilitasComponent } from './update-fasilitas/update-fasilitas.component';
import { FasilitasNewComponent } from './fasilitas-new/fasilitas-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fasilitas', component: FasilitasListComponent },
  { path: 'fasilitas/:kode', component: FasilitasDetailComponent },
  { path: 'user/favorites', component: FavoriteListComponent },
  { path: 'user/booking', component: BookingListComponent },
  { path: 'user/profile', component: ProfileUserComponent },
  { path: 'user/profile/update', component: ProfileUpdateComponent },
  { path: 'fasilitas/:kode/booking', component: FasilitasBookingComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'fasilitas/:kode/update', component: UpdateFasilitasComponent },
  { path: 'add/fasilitas', component: FasilitasNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
