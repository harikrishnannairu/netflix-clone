import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {provideAnimations} from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ProfileCardComponent } from './shared/components/profile-card/profile-card.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';
import { DescriptionPipePipe } from './shared/pipes/description-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowseComponent,
    ProfileCardComponent,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
    DescriptionPipePipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    SwiperModule,
    

  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
