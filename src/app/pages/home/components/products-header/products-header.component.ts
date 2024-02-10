import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  sort = 'desc'
  itemsShowCount = 12;
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() outputSort = new EventEmitter<string>();
  @Output() outputCount = new EventEmitter<number>();
  
  onSortUpdated(newSort: string):void {
    this.sort = newSort;
    this.outputSort.emit(newSort);
  }
  onItemsUpdated(count: number):void {
    this.itemsShowCount = count;
    this.outputCount.emit(count);
  }

  onColumnsUpdated(colsNum: number):void{
    this.columnsCountChange.emit(colsNum);
  }
}
