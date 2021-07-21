import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { MainItemComponent } from './main-item/main-item.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, MainComponent, MainItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
