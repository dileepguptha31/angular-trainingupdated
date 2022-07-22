import { Component, Input } from '@angular/core';
import { SiemensDate } from './siemens-date';

@Component({
  selector: 'month-calendar',
  styleUrls: ['month-calendar.component.css'],
  template: `
    <div class="calendarBox">
      <div class="monthNameBox">
        {{date.getMonthName()}}
      </div>
      <div class="dayNameBox" *ngFor="let dayName of dayNames">
        {{dayName}}
      </div>
      <div *ngFor="let day of date.getDays()" [class]="getDayStyle(day)" (click)="selectedDay(day)">
        {{day}}
      </div>
    </div>
  `,
})
export class MonthCalendarComponent {
  public dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  public date: SiemensDate;
  public currentDate: SiemensDate;
  public selectedDate: SiemensDate | undefined = undefined;

  @Input()
  public month: number | undefined = undefined;

  @Input()
  public year: number | undefined = undefined;

  constructor(/* this = receives reference of newly created object */) {
    this.currentDate = this.date = SiemensDate.getCurrentDate();
  }

  selectedDay(day: number) {
    this.selectedDate = new SiemensDate(day, this.month, this.year, 12, 0, 0);
  }

  getDayStyle(day: number) {
    if (day !== undefined) {
      if (
        this.selectedDate &&
        day === this.selectedDate.getDay() &&
        this.year === this.selectedDate.getYear() &&
        this.month === this.selectedDate.getMonth()
      ) {
        return 'selectedDayBox';
      } else if (
        day === this.currentDate.getDay() &&
        this.year === this.currentDate.getYear() &&
        this.month === this.currentDate.getMonth()
      ) {
        return 'currentDayBox';
      } else {
        return 'dayBox';
      }
    } else {
      return 'emptyDayBox';
    }
  }

  ngOnInit() {
    if (this.year && this.month) {
      this.date = SiemensDate.getDate(this.year, this.month);
    }
  }

  // Called by Angular Fx when @Input variables get new value after 1st time
  ngOnChanges() {
    if (this.year && this.month) {
      this.date = SiemensDate.getDate(this.year, this.month);
    }
  }
}
