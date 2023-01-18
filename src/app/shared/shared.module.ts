import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from './pipes/format-price.pipe';
import { RouterModule } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [FormatPricePipe, CardListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FormatPricePipe, CardListComponent]
})
export class SharedModule { }
