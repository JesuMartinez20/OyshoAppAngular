import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductCard } from 'src/app/core/services/product/interfaces/product-card';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit, OnDestroy {
  private subSweatshirtDetail: Subscription;
  private subRouteParams: Subscription;
  private idProduct: string = '';
  sweatshirtDetail: ProductCard = {id: '', title: ''};

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.subSweatshirtDetail = new Subscription();
    this.subRouteParams = new Subscription();
  }

  ngOnInit(): void {
    this.subRouteParams = this.route.params.subscribe((params: Params) => {
      this.idProduct = params['id'];
    });
    this.subSweatshirtDetail = this.productService.getSweatshirtDetail(this.idProduct).subscribe(product => {
      this.sweatshirtDetail = product;
    });
  }

  ngOnDestroy(): void {
    this.subRouteParams.unsubscribe();
    this.subSweatshirtDetail.unsubscribe();
  }
}
