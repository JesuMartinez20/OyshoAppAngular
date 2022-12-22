import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { SweatshirtsService } from 'src/app/core/services/product/sweatshirts.service';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    HttpClientModule
  ],
  exports: [ProductDetailComponent],
  providers: [SweatshirtsService]
})
export class ProductDetailModule { }
