import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/components/header/header.component';
import { ProductListModule } from './pages/product-list/product-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
