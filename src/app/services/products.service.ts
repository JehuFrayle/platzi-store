import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UpdateProductDTO, CreateProductDTO, Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
  private BASE_API = `${environment.API_URL}/api`;

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.BASE_API}/products`, { params })
  }
  getOneProduct(id: number) {
    return this.http.get<Product>(`${this.BASE_API}/products/${id}`);
  }
  createProduct(dto: CreateProductDTO) {
    return this.http.post<Product>(`${this.BASE_API}/products`, dto);
  }
  updateProduct(id: number, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.BASE_API}/products/${id}`, dto)
  }
  deleteProduct(id: number) {
    return this.http.delete<boolean>(`${this.BASE_API}/products/${id}`)
  }

  getByCategory(categoryId: string, limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.BASE_API}/categories/${categoryId}/products`, { params })
  }
}
