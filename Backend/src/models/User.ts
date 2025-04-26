import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: 'name' })
    username!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column({ default: 'user' })
    role!: string;
}
