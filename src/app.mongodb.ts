import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      entities: [Book],
      synchronize: true,
      logging: ['error', 'info', 'warn'],
      url: process.env.MONGODB_URI,
    }),
  ],
})
export class MongoDBModule {}
