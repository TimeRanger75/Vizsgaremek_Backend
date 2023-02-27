import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './user/entities/user.entity';

@Entity()
export class Kerdoiv {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users, (username) => username.username)
  @JoinColumn()
  username: Users;

  @Column('int')
  weight: number;

  @Column('int')
  height: number;

  @Column('int')
  age: number;

  @Column('int')
  water_consume: number;

  @Column()
  lifestyle: string;

  @Column()
  gender: string;

  @Column()
  diet_plan: string;

  @Column()
  weight_goal: number;

  @Column()
  look: string;
}
