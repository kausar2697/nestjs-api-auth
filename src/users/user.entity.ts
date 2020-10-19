import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User{
  // constructor(public id: string ,public title: string ,public desc: string ,public price: number){};
  @ObjectIdColumn()
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;
}


@Entity()
export class Auth{
  // constructor(public id: string ,public title: string ,public desc: string ,public price: number){};
  @ObjectIdColumn()
  id: string;
  @Column()
  username: string;
  @Column()
  userId: string;
  @Column()
  logTime: string;
}


