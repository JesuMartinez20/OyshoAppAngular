import { ProductCard } from 'src/app/shared/interfaces/product-card';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ResponseGetApi } from 'src/app/shared/interfaces/response-get-api';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class SweatshirtsService {
  constructor(private http: HttpClient) { }

  getAllSweatshirts() {
    //La categoria es el de las sudaderas
    const urlEndPoint = "https://www.oysho.com/itxrest/2/catalog/store/64009600/60361120/category/1469138/product?languageId=-5&appId=1&showProducts=false";

    return this.http.get<ResponseGetApi>(urlEndPoint)
      .pipe(
        map(resp => {
          return resp.products.filter(product => product.bundleProductSummaries.length > 0).map(product => {
            let sweatshirt: ProductCard = this.typedProduct(product);
            return sweatshirt;
          })
        })
      );
  }

  //Este metodo tipea la respuesta del servicio al tipo ProductCard
  private typedProduct(product: Product): ProductCard {
    let chunkImg1 = product.bundleProductSummaries[0].detail.xmedia[0].path;
    let chunkImg2 = product.bundleProductSummaries[0].detail.xmedia[0].xmediaItems[0].medias[0].idMedia;
    let newProduct: ProductCard = {
      id: product.id.toString(),
      image: this.createImgSweatshirt("https://static.oysho.net/6/photos2", chunkImg1, chunkImg2),
      title: product.name,
      price: product.bundleProductSummaries[0].detail.colors[0].sizes[0].price
    }
    return newProduct;
  }

  private createImgSweatshirt(staticPartImg: string, firstChunk: string, secondChunk: string): string {
    return staticPartImg.concat(firstChunk, "/", secondChunk, "0.jpg");
  }
}
