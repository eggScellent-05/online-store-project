import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity("offer")
export class Offer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("decimal", { precision: 5, scale: 2 })
    offer_percentage!: number;

    @OneToOne(() => Category, (category) => category.offer)
    @JoinColumn({ name: "category_id" })
    category!: Category;
}