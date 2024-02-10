import { Component, OnDestroy, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';


const ROWHEIGT: {[id:number]: number} = {
  1: 400,
  3: 300,
  4: 350
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3
  rowHeight = ROWHEIGT[this.cols];
  category = ''
  products: Array<Product> | undefined;
  sort = 'desc';
  count = 12;
  productsSubscription: Subscription | undefined;

  onColumnsCountChange(colsNum: number): void{
    this.cols = colsNum;
    this.rowHeight = ROWHEIGT[this.cols];
  }

  constructor(private storeService: StoreService){}

  onShowCategory(newCategory: string):void{
    this.category = newCategory;
    this.getProducts();
  }


  ngOnInit(): void {
    this.getProducts();
   

    
  }

  getProducts(){
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category).subscribe(_products => this.products = _products);
  }

  onCountChange(newCount: number):void {
    this.count = newCount;
    this.getProducts();
  }

  onSortChange(newSort: string): void{
    this.sort = newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    if(this.productsSubscription){
      this.productsSubscription.unsubscribe();
    }
  }

}
