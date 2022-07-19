import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksManagementComponent } from './books-manager.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [BooksManagementComponent],
  providers: [],
})
export class BooksModule {}
