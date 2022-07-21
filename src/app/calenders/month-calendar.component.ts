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
  <div *ngFor="let day of date.getDays()" class="dayBox">
    {{day}}
  </div>
</div>
  `,
})
export class MonthCalendarComponent {
  public dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  public date: SiemensDate;

  @Input()
  public month: number | undefined = undefined;

  @Input()
  public year: number | undefined = undefined;

  constructor(/* this = receives reference of newly created object */) {
    this.date = SiemensDate.getCurrentDate();
  }

  ngOnInit() {
    if (this.year && this.month) {
      this.date = SiemensDate.getDate(this.year, this.month);
    }
  }

  ngOnChanges() {
    if (this.year && this.month) {
      this.date = SiemensDate.getDate(this.year, this.month);
    }
  }
}
