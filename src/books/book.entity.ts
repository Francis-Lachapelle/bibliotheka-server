import { Entity, Column, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Book {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;
}
