import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity("item")
export class Item {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price!: number;

    @Column("decimal", { default: 0, precision: 10, scale: 2 })
    discount_price!: number;

    @Column("text")
    description!: string;

    @Column()
    image!: string;

    @Column("decimal")
    rating!: number;

    @Column()
    count!: number;

    @ManyToOne(() => Category, (category) => category.items)
    @JoinColumn({ name: 'category_id' })
    category!: Category;
}
