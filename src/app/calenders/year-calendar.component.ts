import { Component } from '@angular/core';

@Component({
  selector: 'year-calendar',
  template: `

    <div>
      <button (click)="previous()">Previous</button>
      <h1>{{year}}</h1>
      <button (click)="next()">Next</button>
    </div>

    <month-calendar *ngFor="let month of months" [year]="year" [month]="month"></month-calendar>
  `,
})
export class YearCalendarComponent {
  public year = 2022;
  public months = [];
  constructor() {
    for (let i = 1; i <= 12; i++) {
      this.months.push(i);
    }
  }

  previous() {
    this.year--;
  }
  next() {
    this.year++;
  }
}
