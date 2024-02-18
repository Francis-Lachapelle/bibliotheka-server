import { Injectable } from '@nestjs/common';
import { IBook } from '../interfaces/IBook';
@Injectable()
export class BooksService {
  getAllBooks(): [IBook] {
    return [{ _id: '2421', name: ' Test 1', description: 'Description' }];
  }
}
