//Esta interfaz nos permite mapear los detalles del producto
export interface ProductCard {
  id: string,
  image?: string,
  title: string,
  description?: string,
  reference?: string,
  price?: string,
  colors?: string[]
}
