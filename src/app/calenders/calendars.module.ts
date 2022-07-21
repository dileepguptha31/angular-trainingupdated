import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarsManagerComponent } from './calander-manager.component';
import { MonthCalendarComponent } from './month-calendar.component';
import { YearCalendarComponent } from './year-calendar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CalendarsManagerComponent,
    MonthCalendarComponent,
    YearCalendarComponent,
  ],
})
export class CalendarsModule {}
