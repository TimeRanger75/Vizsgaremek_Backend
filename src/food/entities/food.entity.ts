import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
