import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { StoreService } from '../../../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit, OnDestroy {
  categories: Array<string> | undefined;
  categoriesSubscription: Subscription | undefined;
  @Output() showCategory = new EventEmitter<string>();

  constructor(private storeService: StoreService){}


  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories().subscribe(response => {
      this.categories = response;
    });
  }

  onShowCategory(category: string):void{
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  }
} 
