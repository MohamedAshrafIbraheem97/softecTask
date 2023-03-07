import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsSubscription$!: Subscription;
  products!: Product[];

  constructor(
    private readonly _productService: ProductService,
    private _router: Router,
    private _currentRoute: ActivatedRoute
  ) {}

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

  editProduct(id: number) {
    this._router.navigate(['edit/', id], {
      relativeTo: this._currentRoute,
    });
  }
}
