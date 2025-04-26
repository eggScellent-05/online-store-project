import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./Item";
import { Offer } from "./Offer";

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    category_id!: number;

    @Column()
    category_name!: string;

    @OneToMany(() => Item, (item) => item.category)
    items!: Item[];

    @OneToOne(() => Offer, (offer) => offer.category)
    offer!: Offer;
}