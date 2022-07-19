import { Component } from '@angular/core';

@Component({
  selector: 'books-manager',
  templateUrl: 'books-manager.component.html',
  styles: [''],
})
export class BooksManagementComponent {
  public data = '';

  // Instance Data Member
  public books = [
    { title: 'T1', author: 'A1', price: 400 },
    { title: 'T2', author: 'A2', price: 405 },
    { title: 'T3', author: 'A3', price: 405 },
    { title: 'T4', author: 'A4', price: 405 },
  ];

  public deleteBook(book: any) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  public addNewBook() {
    this.books.push({ title: '', author: '', price: 0 });
  }

  public display() {
    this.data = JSON.stringify(this.books);
  }
}
