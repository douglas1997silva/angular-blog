import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { BannerTitleComponent } from './components/banner-title/banner-title.component';
import { LargeCardComponent } from './components/large-card/large-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { FooterInfComponent } from './components/footer-inf/footer-inf.component';
import { HomeComponent } from './pages/hpages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    BannerTitleComponent,
    LargeCardComponent,
    SmallCardComponent,
    FooterInfComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
