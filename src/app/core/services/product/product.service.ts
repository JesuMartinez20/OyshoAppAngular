import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { ProductCard } from 'src/app/core/services/product/interfaces/product-card';
import { ResponseGetSweatshirts } from 'src/app/core/services/product/interfaces/response-get-sweatshirt';
import { ResponseGetSweatshirtDetail } from 'src/app/core/services/product/interfaces/response-get-sweatshirt-detail';
import { typedProduct } from 'src/app/shared/helpers/helpers';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private urlEndPoint: string = '';

  constructor(private http: HttpClient) { }

  getSweatshirts() {
    this.urlEndPoint = environment.apiGetSweatshirts;
    let sweatshirtsFiltered: ProductCard[] = [];//Este array filtrara los productos que tengan diferentes titulos

    return this.http.get<ResponseGetSweatshirts>(this.urlEndPoint)
      .pipe(
        map(resp => {
          return resp.products.filter(product => product.bundleProductSummaries.length > 0).map(product => {
            let sweatshirt: ProductCard = typedProduct(product);
            return sweatshirt;
          }).map(product => {
            let uniqueProduct: ProductCard = { id: '', title: '' };

            if (sweatshirtsFiltered.length >= 1) {
              let sweatshirtFound = sweatshirtsFiltered.find(sweatshirt => sweatshirt.title === product.title);
              if (!sweatshirtFound) {
                uniqueProduct = product;
                sweatshirtsFiltered.push(uniqueProduct);
              }
            } else {
              uniqueProduct = product;
              sweatshirtsFiltered.push(uniqueProduct);
            }

            return uniqueProduct;
          }).filter(sweatshirt => sweatshirt.id && sweatshirt.title);
        })
      );
  }

  getSweatshirtDetail(id: string) {
    this.urlEndPoint = environment.apiGetDetailSweatshirt + id + "/detail?languageId=-5&appId=1";

    return this.http.get<ResponseGetSweatshirtDetail>(this.urlEndPoint)
      .pipe(
        map(resp => {
          let sweatshirtDetail: ProductCard = typedProduct(resp);
          return sweatshirtDetail;
        })
      );
  }
}
