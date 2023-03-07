import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// models
import { Product } from '../models/product.model';

//services
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsSubscription$!: Subscription;
  products!: Product[];

  constructor(private readonly _productService: ProductService) {}

  ngOnInit(): void {
    // get products and initialize them to be sent to the template
    this.productsSubscription$ = this._productService.productsChanged.subscribe(
      (_productsResponse) => {
        this.products = _productsResponse;
      }
    );
  }

  ngOnDestroy(): void {
    this.productsSubscription$?.unsubscribe();
  }
}
