import { Component } from '@angular/core';

@Component({
  selector: 'month-calendar',
  template: `
  <div>
  <div class="monthNameBox">{{monthName}}</div>
  <div class="dayNamesBox" *ngFor="let dayName of dayNames">{{dayName}}</div>
  </div>
  `,
  styles: [
    `
    .monthNameBox { 
      background-color: black;
      color: white;
      height: 40px;
      width: 280px;
      text-align: center; 
      vertical-align: middle;
      line-height: 40px;
      font-size: 10pt;
      font-family: 'Arial';
    }

    .dayNameBox { 
      background-color: gray;
      color: white;
      height: 40px;
      width: 40px;
      text-align: center; 
      vertical-align: middle;
      line-height: 40px;
      font-size: 10pt;
      font-family: 'Arial';
      float: left;
    }
  `,
  ],
})
export class MonthCalendarComponent {
  public monthName = 'January';
  public dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  public monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  public year: number;
  public month: number;
  public today: number;
  constructor(/* this = receives reference of newly created object */) {
    const current = new window.Date();
    this.year = current.getFullYear();
    this.month = current.getMonth() + 1;
    this.today = current.getDate();
    this.monthName = this.monthNames[this.month - 1];
  }
}
