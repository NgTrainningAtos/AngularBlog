import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HomeFilterComponent } from './home-filter/home-filter.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { LimitePipe } from './limite.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogoComponent,
    MenuComponent,
    BlogListComponent,
    HomeFilterComponent,
    BlogCardComponent,
    LimitePipe
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
