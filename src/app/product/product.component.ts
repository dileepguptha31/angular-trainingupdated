import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  template: `
  <div style ="border: 1px solid #999; margin:10px;padding: 10px; display: inline-block">
  <div>{{name}}</div>
  <div>{{price}}</div>
  <counter></counter>
  </div>
  `,
  styles: [''],
})
export class ProductComponent {
  @Input('name')
  public name = '';

  @Input('price')
  public price = 0;
}
