import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseURL = "https://localhost:44378/api/Product"

  constructor(private http: HttpClient) { }

  formData: Product = new Product();
  list: Product[];

  postProduct() {
    return this.http.post(this.baseURL, this.formData);
  }

  putProduct() {
    return this.http.put(`${this.baseURL}/${this.formData.productId}`, this.formData);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Product[]);
  }
}



