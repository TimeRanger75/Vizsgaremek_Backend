import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//adatbazis neve user
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude({ toClassOnly: true })
  @Column()
  password: string;
}

@Entity()
export class Foods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('double')
  calorie: number;

  @Column('double')
  protein: number;

  @Column('double')
  carbohydrate: number;

  @Column('double')
  fat: number;
}

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  admin_name: string;

  @Column()
  password: string;
}
