import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    JoinColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

import { User } from './User';
import { Item } from './Item';

@Entity('cart')
export class Cart {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @ManyToOne(() => Item, (item) => item.id)
    @JoinColumn({ name: 'item_id' })
    item!: Item;

    @OneToMany(() => Cart, (cart) => cart.item)
    carts!: Cart[];

    @Column()
    quantity!: number;

    @UpdateDateColumn()
    updatedAt!: Date;
}
