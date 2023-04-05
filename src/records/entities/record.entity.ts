import { Users } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Record {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bodyWeight: number;

    @Column()
    workoutTime: number;

    @Column()
    date: Date;

    @ManyToOne(() => Users, (user)=> user.id)
    user: Users;
}
