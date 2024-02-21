import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, MongoRepository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: MongoRepository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async addOne(newBook: Book): Promise<Book> {
    return await this.booksRepository.save(newBook);
  }
  findOne(_id: ObjectId): Promise<Book | null> {
    return this.booksRepository.findOneBy({ _id });
  }

  async remove(_id: ObjectId): Promise<void> {
    await this.booksRepository.delete(_id);
  }
}
