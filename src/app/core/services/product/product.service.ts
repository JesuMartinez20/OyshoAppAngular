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

    return this.http.get<ResponseGetSweatshirts>(this.urlEndPoint)
      .pipe(
        map(resp => {
          return resp.products.filter(product => product.bundleProductSummaries.length > 0).map(product => {
            let sweatshirt: ProductCard = typedProduct(product);
            return sweatshirt;
          })
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
