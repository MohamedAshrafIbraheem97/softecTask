import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { newOrder, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsSubscription$!: Subscription;
  products!: Product[];
  isAddingNewOrder: boolean = false;
  newOrder: newOrder[] = [];

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

  onNewOrder() {
    this.isAddingNewOrder = !this.isAddingNewOrder;
    console.log('clicked');
  }

  onAddToOrder(product: Product) {
    this.newOrder.push({
      product: product,
      Pieces: 1,
    });
    this._productService.reduceProductQtyByOne(product.ProductId);
  }

  onSaveOrder() {
    this._productService.productsAddedToNewOrder.next(this.newOrder);
    this._router.navigate(['orders/new']);
  }
}
