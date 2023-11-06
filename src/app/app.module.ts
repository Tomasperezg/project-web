import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom-components/header/header.component';
import { BannerComponent } from './custom-components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DoubleBannerLeftComponent } from './custom-components/double-banner-left/double-banner-left.component';
import { DoubleBannerRightComponent } from './custom-components/double-banner-right/double-banner-right.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    DoubleBannerLeftComponent,
    DoubleBannerRightComponent,
    PortfolioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [NgOptimizedImage],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
