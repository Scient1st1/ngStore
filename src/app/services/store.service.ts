import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = 12, sort = 'desc', category?: string): Observable<any> {
    return this.httpClient.get(
      `${STORE_BASE_URL}/products
        ${category ? '/category/' + category : ''}
        ?sort=${sort}&limit=${limit}`
    );
  }
  getAllCategories(): Observable<any> {
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    );
  }
}
