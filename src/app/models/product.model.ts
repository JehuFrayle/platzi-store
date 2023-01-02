export interface Category {
  id: number,
  name: string,
  typeImg: string
}
export interface Product {
  id: number,
  title: string,
  price: number,
  images: string[],
  description: string,
  category: Category
}
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateProductDTO extends Partial<CreateProductDTO> { }
