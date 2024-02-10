import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  
  @Input() product: Product | undefined;

  
}
