import { environment } from 'src/environments/environment';
import { ProductCard } from 'src/app/core/services/product/interfaces/product-card';
import { Product } from 'src/app/core/services/product/interfaces/response-get-sweatshirt';
import { ResponseGetSweatshirtDetail } from 'src/app/core/services/product/interfaces/response-get-sweatshirt-detail';

function createImgSweatshirt(staticPartImg: string, firstChunk: string, secondChunk: string): string {
  return staticPartImg.concat(firstChunk, "/", secondChunk, "0.jpg");
}

//Este metodo tipea la respuesta del servicio al tipo ProductCard
export function typedProduct(product: Product | ResponseGetSweatshirtDetail): ProductCard {
  let chunkImg1 = product.bundleProductSummaries[0].detail.xmedia![0].path;
  let chunkImg2 = product.bundleProductSummaries[0].detail.xmedia![0].xmediaItems[0].medias[0].idMedia;
  let newProduct: ProductCard = {
    id: product.id.toString(),
    image: createImgSweatshirt(environment.apiGetImgSweatshirt, chunkImg1, chunkImg2),
    title: product.name,
    description: product.bundleProductSummaries[0].detail.longDescription,
    reference: product.bundleProductSummaries[0].detail.displayReference,
    price: product.bundleProductSummaries[0].detail.colors[0].sizes[0].price,
    colors: product.bundleProductSummaries[0].detail.colors.map(color => color.name)
  }
  return newProduct;
}
