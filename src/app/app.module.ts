import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { BooksModule } from './books/books.module';
import { TestModule } from './test/test.module';
import { ClocksModule } from './clocks/clocks.module';
import { routs } from './routs';
import { CalendarsModule } from './calenders/calendars.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ProductsModule,
    BooksModule,
    TestModule,
    ClocksModule,
    CalendarsModule,
    RouterModule.forRoot(routs),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
