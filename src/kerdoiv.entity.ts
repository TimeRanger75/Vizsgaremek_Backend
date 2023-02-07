import { userInfo } from 'os';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './user.entity';

@Entity()
export class Kerdoiv {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users, (felh_nev) => felh_nev.felh_nev)
  @JoinColumn()
  felh_nev: Users;

  @Column('int')
  suly: number;

  @Column('int')
  magassag: number;

  @Column('int')
  eletkor: number;

  @Column('int')
  viz_fogyasztas: number;

  @Column()
  eletmod: string;

  @Column()
  nem: string;

  @Column()
  suly_cel: string;

  @Column()
  alomsuly: number;

  @Column()
  kinezetcel: string;
}
