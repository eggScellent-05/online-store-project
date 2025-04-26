import { AppDataSource } from "../config/database"
import { Category } from "../models/Category";
import { Item } from "../models/Item";

const itemRepo = AppDataSource.getRepository(Item);
const categoryRepo = AppDataSource.getRepository(Category);

type ItemInput = {
    title: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    count: number;
    category_id: number;
    discount_price?: number;
};


export const getAll = async (): Promise<Item[]> => {
    return await itemRepo.find({ relations: ["category"] });
}

export const getById = async (id: number): Promise<Item> => {
    const item = await itemRepo.findOne({ where: { id: id }, relations: ["category"] });
    if (!item) throw new Error(`item of id: ${id} not found`);
    return item;
}

export const getByCategory = async (category_id: number): Promise<Item[]> => {
    const category = await categoryRepo.findOneBy({ category_id: category_id });
    if (!category) {
        throw new Error('Category not found');
    }
    return await itemRepo.find({ where: { category: { category_id } }, relations: ["category"], });
}

export const create = async (data: ItemInput): Promise<Item> => {
    const category = await categoryRepo.findOneBy({ category_id: data.category_id });
    if (!category) {
        throw new Error('Category not found');
    }

    const item = itemRepo.create({
        ...data,
        category,
    })

    return await itemRepo.save(item);
}

export const update = async (data: Partial<ItemInput>, id: number): Promise<Item> => {
    const item = await itemRepo.findOneBy({ id: id });
    if (!item) throw new Error(`item of id: ${id} not found`);

    if (data.category_id) {
        const category: Category | null = await categoryRepo.findOneBy({ category_id: data.category_id });
        if (!category) throw new Error("Category not found");
        item.category = category;
    }

    Object.assign(item, data);
    return await itemRepo.save(item);
}

export const remove = async (id: number): Promise<void> => {
    const result = await itemRepo.delete({ id: id })
    if (result.affected === 0) throw new Error("Item not found");
}