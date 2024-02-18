import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { IBook } from '../interfaces/IBook';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Array<IBook> {
    return this.booksService.getAllBooks();
  }
}
