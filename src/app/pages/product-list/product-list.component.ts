import { Component } from '@angular/core';
import { ProductCard } from 'src/app/shared/interfaces/product-card';
import { SweatshirtsService } from 'src/app/core/services/product/sweatshirts.service';

@Component({
  selector: 'oy-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //Productos que se renderizaran en la web
  sweatshirts: ProductCard[] = [];

  constructor(private sweatshirtService: SweatshirtsService) {
  }

  ngOnInit(): void {
    //Debido a la compleja estructura de la respuesta se ha optado por poner any pero no es lo suyo
    this.sweatshirtService.getAllSweatshirts().subscribe(products => {
      //De esta manera se renderizan las sudaderas
      const productsFiltered = Array.from(new Set(products.map(p => p.title))).map(title => {
        return products.find(p => p.title === title)!
      });
      this.sweatshirts = productsFiltered;
      // let productsFiltered = response.products.filter((product:any) => product.name);
      // this.renderSweatshirtCards(productsFiltered);
      console.log(this.sweatshirts);
    });
  }

  /*private renderSweatshirtCards(products: any) {
    for (const product of products) {
      let chunkImg1 = product.bundleProductSummaries[0].detail.xmedia[0].path;
      let chunkImg2 = product.bundleProductSummaries[0].detail.xmedia[0].xmediaItems[0].medias[0].idMedia;
      let sweatshirt: ProductCard = {
        id : product.id,
        image: this.createImgSweatshirt("https://static.oysho.net/6/photos2", chunkImg1, chunkImg2),
        title: product.name,
        price: product.bundleProductSummaries[0].detail.colors[0].sizes[0].price
      }
      //Se evita incorporar sudaderas que tengan el mismo titulo
      if (this.sweatshirts.length > 0) {
        let sweatshirtFound = this.sweatshirts.find((item: ProductCard) => item.title === sweatshirt.title);
        if (sweatshirtFound) continue;
      }

      this.sweatshirts.push(sweatshirt);
    }
  }*/
}
