// modules created by angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// modules created by developer
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

// componenets
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductsInterceptorService } from './services/products.interceptor.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    OrdersModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProductsInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
