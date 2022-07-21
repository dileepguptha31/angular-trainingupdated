export class SiemensDate {
  private day: number;
  private month: number;
  private year: number;
  private hour: number;
  private minute: number;
  private second: number;

  public constructor(
    day: number,
    month: number,
    year: number,
    hour: number,
    minute: number,
    second: number
  ) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  public static getCurrentDate(): SiemensDate {
    const current = new Date();
    return new SiemensDate(
      current.getDate(),
      current.getMonth() + 1,
      current.getFullYear(),
      current.getHours(),
      current.getMinutes(),
      current.getSeconds()
    );
  }

  public static getTotalDaysInMonth(year: number, month: number): number {
    return new Date(
      year, // year
      month, // month : 1-based index
      0 // day
    ).getDate();
  }

  public static getFirstDayOfMonthInWeek(year: number, month: number): number {
    return new Date(
      year, // year
      month - 1, // month : 0-based index
      1 // day
    ).getDay();
  }

  public getDays(): number[] {
    let days = new Array(42);
    const totalDays = SiemensDate.getTotalDaysInMonth(this.year, this.month);
    const firstDayInWeek = SiemensDate.getFirstDayOfMonthInWeek(
      this.year,
      this.month
    );
    for (let i = firstDayInWeek, day = 1; day <= totalDays; ++i, ++day) {
      days[i] = day;
    }
    return days;
  }

  private static monthNames = [
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

  public getMonthName(): string {
    return SiemensDate.monthNames[this.month - 1];
  }
}

// declare var window: any;
// window.siemens = {};
// window.siemens.Date = function (day, month, year, hour, minute, second) {
//   this.day = day;
//   this.month = month;
//   this.year = year;
//   this.hour = hour;
//   this.minute = minute;
//   this.second = second;
// };

// // Instance Methods -------------------------------------------------------------------------------
// window.siemens.Date.prototype.days = function () {
//   let days = new Array[42]();
//   const totalDays = window.siemens.Date.getTotalDaysInMonth(
//     this.year,
//     this.month
//   );
//   const firstDayInWeek = window.siemens.Date.getDirstDayOfMonthInWeek(
//     this.year,
//     this.month
//   );
//   for (let i = firstDayInWeek, day = 1; day <= totalDays; ++i, ++day) {
//     days[i] = day;
//   }
//   return days;
// };
// window.siemens.Date.prototype.getMonthName = function () {
//   const monthNames = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   return monthNames[this.month - 1];
// };

// // Static Methods --------------------------------------------------
// window.siemens.Date.getCurrentDate = function () {
//   const current = new Date();
//   return new window.siemens.Date(
//     current.getDate(),
//     current.getMonth() + 1,
//     current.getFullYear(),
//     current.getHours(),
//     current.getMinutes(),
//     current.getSeconds()
//   );
// };
// window.siemens.Date.getTotalDaysInMonth = function (year, month) {
//   return new Date(
//     year, // year
//     month, // month : 1-based index
//     0 // day
//   ).getDate();
// };
// window.siemens.Date.getFirstDayOfMonthInWeek = function (year, month) {
//   return new Date(
//     year, // year
//     month - 1, // month : 0-based index
//     1 // day
//   ).getDay();
// };
