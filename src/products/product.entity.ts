import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Product{
  // constructor(public id: string ,public title: string ,public desc: string ,public price: number){};
  @ObjectIdColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  desc: string;
  @Column()
  price: number;
}
