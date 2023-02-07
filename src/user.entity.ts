import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//adatbazis neve user
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  felh_nev: string;

  @Column()
  nev: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

@Entity()
export class Etelek {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nev: string;

  @Column('double')
  caloria: number;

  @Column('double')
  feherje: number;

  @Column('double')
  szenhidrat: number;

  @Column('double')
  zsir: number;
}

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  felh_nev: string;

  @Column()
  pass: string;
}
