import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsManagerComponent } from './products/products-manager.component';
import { RouterModule } from '@angular/router';
import { BooksManagementComponent } from './books/books-manager.component';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { BooksModule } from './books/books.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ProductsModule,
    BooksModule,
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
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
