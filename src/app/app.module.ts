import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { BannerTitleComponent } from './components/banner-title/banner-title.component';
import { LargeCardComponent } from './components/large-card/large-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

import { HomeComponent } from './pages/hpages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonagemComponent } from './pages/personagem/personagem.component';
import { RotaperComponent } from './pages/rotaper/rotaper.component';

import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    BannerTitleComponent,
    LargeCardComponent,
    SmallCardComponent,

    HomeComponent,
    ContentComponent,
    FooterComponent,
    PersonagemComponent,
    RotaperComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
