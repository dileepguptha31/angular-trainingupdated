import { Component } from "@angular/core";

@Component({
  selector:'products-manager',
  template:` <product
  *ngFor="let prod of products"
  [name]="prod.name"
  [price]="prod.price"
></product>`,
  styles:['']
})
export class ProductsManagerComponent{
  public products = [
    { name: 'Nokia', price: 15000 },
    { name: 'Samsung', price: 25000 },
    { name: 'Motorola', price: 35000 },
    { name: 'Apple', price: 75000 },
  ];
}