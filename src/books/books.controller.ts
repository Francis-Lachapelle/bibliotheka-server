import { Controller, Get, Post, Body } from '@nestjs/common';

import { BooksService } from './books.service';
import { Book } from './book.entity';
import { ObjectId } from 'mongodb';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return await this.booksService.findAll();
  }

  @Get('create')
  async createOne(): Promise<Book> {
    const newBook = new Book();
    newBook._id = new ObjectId();
    newBook.description = 'Ceci est une description';
    newBook.name = 'Premier livre';
    return await this.booksService.addOne(newBook);
  }
}
