import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SweatshirtsService } from 'src/app/core/services/product/sweatshirts.service';
import { ProductCard } from 'src/app/shared/interfaces/product-card';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  private idProduct: string = '';
  sweatshirtDetail: ProductCard = {};

  constructor(private sweatshirtService: SweatshirtsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.paramMap.get("id")!;
    this.sweatshirtService.getSweatshirtDetail(this.idProduct).subscribe(product => {
      this.sweatshirtDetail = product;
    });
  }
}
