import { Component } from "@angular/core";

@Component({
  selector: 'counter',
  template: `
  <button (click)="decremenet()">-</button>
 {{ count }}
  <button (click)="incremenet()">+</button>
  `,
  styles: [''],
})
export class CounterComponent {
  public count = 0;

  public incremenet() {
    ++this.count;
  }

  public decremenet() {
    --this.count;
  }
}