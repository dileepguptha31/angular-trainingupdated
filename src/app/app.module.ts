import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CounterComponent } from './counterComponent';
import { ProductsManagerComponent } from './product/products-manager.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { BooksManagementComponent } from './books/booksmanagercomponent';
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
  declarations: [
    AppComponent,
    HelloComponent,
    ProductComponent,
    CounterComponent,
    ProductsManagerComponent,
    BooksManagementComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
