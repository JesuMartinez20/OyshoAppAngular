import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCard } from 'src/app/core/services/product/interfaces/product-card';
import { ProductService } from 'src/app/core/services/product/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'oy-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
  private subSweatshirts: Subscription;
  //Productos que se renderizaran en la web
  sweatshirts: ProductCard[] = [];
  pathSweatshirts: string = environment.pathSweatshirts;

  constructor(private productService: ProductService) {
    this.subSweatshirts = new Subscription();
  }

  ngOnInit(): void {
    this.subSweatshirts = this.productService.getSweatshirts().subscribe(products => {
      //De esta manera se renderizan las sudaderas
      const productsFiltered = Array.from(new Set(products.map(p => p.title))).map(title => {
        return products.find(p => p.title === title)!
      });
      this.sweatshirts = productsFiltered;
    });
  }

  ngOnDestroy(): void {
    this.subSweatshirts.unsubscribe();
  }
}
