import { Component } from '@angular/core';
import { SiemensDate } from './siemens-date';

@Component({
  selector: 'month-calendar',
  styles: [
    `
    .calendarBox {
      width: 280px;
    }
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

    .dayBox { 
      background-color: white;
      color: black;
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
  template: `
    <div class="calendarBox">
      <div class="monthNameBox">
        {{date.getMonthName()}}
      </div>
      <div class="dayNameBox" *ngFor="let dayName of dayNames">
        {{dayName}}
      </div>
      <div *ngFor="let day of date.getDays()" class="dayBox">
        {{day}}
      </div>
    </div>
  `,
})
export class MonthCalendarComponent {
  public dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  public date: SiemensDate;
  constructor(/* this = receives reference of newly created object */) {
    this.date = SiemensDate.getCurrentDate();
  }
}
