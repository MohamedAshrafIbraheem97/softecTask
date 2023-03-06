import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'softecTask';

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProduct(123);
  }
}
