import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counterComponent';
import { ProductsManagerComponent } from './products/products-manager.component';
import { RouterModule } from '@angular/router';
import { BooksManagementComponent } from './books/books-manager.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      {
        path: 'products',
        component: ProductsManagerComponent,
      },
      {
        path: 'books',
        component: BooksManagementComponent,
      },
    ]),
  ],
  declarations: [AppComponent, CounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
