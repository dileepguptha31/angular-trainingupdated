import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestManagerComponent } from './test-manager.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TestManagerComponent],
  providers: [],
})
export class TestModule {}
