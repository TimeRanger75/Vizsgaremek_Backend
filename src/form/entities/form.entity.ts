import { Users } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  weight: number;

  @Column('int')
  height: number;

  @Column('int')
  age: number;

  @Column()
  water_consume: string;

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
