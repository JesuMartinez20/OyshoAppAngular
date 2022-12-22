import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/shared/interfaces/product-card';
import { SweatshirtsService } from 'src/app/core/services/product/sweatshirts.service';

@Component({
  selector: 'oy-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  //Productos que se renderizaran en la web
  sweatshirts: ProductCard[] = [];

  constructor(private sweatshirtService: SweatshirtsService) {
  }

  ngOnInit(): void {
    this.sweatshirtService.getAllSweatshirts().subscribe(products => {
      //De esta manera se renderizan las sudaderas
      const productsFiltered = Array.from(new Set(products.map(p => p.title))).map(title => {
        return products.find(p => p.title === title)!
      });
      this.sweatshirts = productsFiltered;
    });
  }
}
