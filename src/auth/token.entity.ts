import { Users } from 'src/user/entities/user.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export default class Token {
  @PrimaryColumn()
  token: string;

  @ManyToOne(() => Users)
  user: Users;
}
