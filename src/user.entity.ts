import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//adatbazis neve user
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  @Column()
  username: string;

  @Column()
  age: number;
}
