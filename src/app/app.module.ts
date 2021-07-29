import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FasilitasListComponent } from './fasilitas-list/fasilitas-list.component';
import { FasilitasDetailComponent } from './fasilitas-detail/fasilitas-detail.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FasilitasBookingComponent } from './fasilitas-booking/fasilitas-booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UpdateFasilitasComponent } from './update-fasilitas/update-fasilitas.component';
import { FasilitasNewComponent } from './fasilitas-new/fasilitas-new.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FasilitasListComponent,
    FasilitasDetailComponent,
    FavoriteListComponent,
    ProfileUserComponent,
    BookingListComponent,
    HeaderComponent,
    FooterComponent,
    ProfileUpdateComponent,
    LandingPageComponent,
    FasilitasBookingComponent,
    AboutUsComponent,
    UpdateFasilitasComponent,
    FasilitasNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4200"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
