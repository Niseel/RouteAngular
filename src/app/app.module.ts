import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, ProductModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Để config đúng thì cần thêm router-outlet vào parent component
// Vì đang config ở app.module nên app.component chính là parent component
