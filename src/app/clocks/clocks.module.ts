import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnalogClockComponent } from './analog-clock.component';
import { ClocksManagerComponent } from './clocks-manager.component';
import { DigitalClockComponent } from './digital-clock.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ClocksManagerComponent,
    DigitalClockComponent,
    AnalogClockComponent,
  ],
})
export class ClocksModule {}
