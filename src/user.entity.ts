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

  @Column()
  password: string;
 
}

export class Etelek{
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


export class Admin{
  @Column()
  felh_nev: string;

  @Column()
  pass: string;
}

