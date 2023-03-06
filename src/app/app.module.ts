import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule, OrdersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
