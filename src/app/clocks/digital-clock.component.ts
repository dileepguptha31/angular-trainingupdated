import { Component } from '@angular/core';

@Component({
  selector: 'digital-clock',
  template: `{{time}}`,
  styles: [],
})
export class DigitalClockComponent {
  public time = '';
  public timerId = null;
  constructor() {
    this.timerId = setInterval(() => {
      let currentTime = new Date();
      this.time = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}
