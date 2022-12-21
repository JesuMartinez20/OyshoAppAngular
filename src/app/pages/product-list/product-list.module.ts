import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SweatshirtsService } from 'src/app/core/services/product/sweatshirts.service';
import { ProductListComponent } from './product-list.component';
import { SubheaderComponent } from 'src/app/core/components/subheader/subheader.component';
import { FormatPricePipe } from 'src/app/shared/pipes/format-price.pipe';

@NgModule({
  declarations: [ProductListComponent, SubheaderComponent, FormatPricePipe],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    HttpClientModule
  ],
  exports: [ProductListComponent],
  providers: [SweatshirtsService]
})
export class ProductListModule { }
