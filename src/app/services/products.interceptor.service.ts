import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable()
export class ProductsInterceptorService implements HttpInterceptor {
  // constructor(private _productsService: ProductService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // when you call any request excepte getProducts call getProducts()

    // console.log(
    //   this._productsService.productsChanged.subscribe((data) =>
    //     console.log(data)
    //   )
    // );

    return next.handle(req);
  }
}
