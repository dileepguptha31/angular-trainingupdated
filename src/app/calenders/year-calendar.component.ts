import { Component } from '@angular/core';

@Component({
  selector: 'year-calendar',
  template: `

    <h1>2022</h1>
    <month-calendar [year]="2022" [month]="1"></month-calendar>
    <month-calendar [year]="2022" [month]="2"></month-calendar>
    <month-calendar [year]="2022" [month]="3"></month-calendar>
    <month-calendar [year]="2022" [month]="4"></month-calendar>
    <month-calendar [year]="2022" [month]="5"></month-calendar>
    <month-calendar [year]="2022" [month]="6"></month-calendar>
    <month-calendar [year]="2022" [month]="7"></month-calendar>
    <month-calendar [year]="2022" [month]="8"></month-calendar>
    <month-calendar [year]="2022" [month]="9"></month-calendar>
    <month-calendar [year]="2022" [month]="10"></month-calendar>
    <month-calendar [year]="2022" [month]="11"></month-calendar>
    <month-calendar [year]="2022" [month]="12"></month-calendar>
  `,
})
export class YearCalendarComponent {}
