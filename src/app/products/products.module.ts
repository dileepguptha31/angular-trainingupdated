import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { ProductComponent } from './product.component';
import { ProductsManagerComponent } from './products-manager.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductsManagerComponent, ProductComponent, CounterComponent],
  providers: [],
})
export class ProductsModule {}
