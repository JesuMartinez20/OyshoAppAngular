import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from './pipes/format-price.pipe';

@NgModule({
  declarations: [FormatPricePipe],
  imports: [
    CommonModule
  ],
  exports: [FormatPricePipe]
})
export class SharedModule { }
