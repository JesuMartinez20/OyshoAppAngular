import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from 'src/app/core/services/product/interfaces/product-card';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'oy-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  sweatshirts$: Observable<ProductCard[]>;

  constructor(private productService: ProductService) {
    this.sweatshirts$ = new Observable();
  }

  ngOnInit(): void {
    this.getSweatshirts();
  }

  getSweatshirts() {
    this.sweatshirts$ = this.productService.getSweatshirts();
  }
}
