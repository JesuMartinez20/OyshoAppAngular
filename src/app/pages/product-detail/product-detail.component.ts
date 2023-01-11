import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductCard } from 'src/app/core/services/product/interfaces/product-card';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  private idProduct: string = '';
  sweatshirtDetail: ProductCard = {id: '', title: ''};

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.paramMap.get("id")!;
    this.productService.getSweatshirtDetail(this.idProduct).subscribe(product => {
      this.sweatshirtDetail = product;
    });
  }
}
