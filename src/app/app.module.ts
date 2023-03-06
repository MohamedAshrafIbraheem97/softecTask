import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    OrderDetailComponent,
    NewOrderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
