import { Component, Input } from '@angular/core';
import { ProductCard } from 'src/app/core/services/product/interfaces/product-card';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'oy-card',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent {
  @Input() sweatshirt: ProductCard = {id:'', title:''};
  pathSweatshirts$: string = environment.pathSweatshirts;

  constructor() {}

}
