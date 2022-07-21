import { BooksManagementComponent } from './books/books-manager.component';
import { CalendarsManagerComponent } from './calenders/calander-manager.component';
import { ClocksManagerComponent } from './clocks/clocks-manager.component';
import { ProductsManagerComponent } from './products/products-manager.component';
import { TestManagerComponent } from './test/test-manager.component';

export const routs = [
  {
    path: 'products',
    component: ProductsManagerComponent,
  },
  {
    path: 'books',
    component: BooksManagementComponent,
  },
  {
    path: 'test',
    component: TestManagerComponent,
  },
  {
    path: 'clocks',
    component: ClocksManagerComponent,
  },
  {
    path: 'calendar',
    component: CalendarsManagerComponent,
  },
];
