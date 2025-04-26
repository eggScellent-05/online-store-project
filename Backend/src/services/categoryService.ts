import { AppDataSource } from "../config/database"
import { Category } from "../models/Category"

const categoryRepo = AppDataSource.getRepository(Category);

export const getAll = async (): Promise<Category[]> => {
    return await categoryRepo.find(); //{ relations: ["items", "offer"] }
}

export const getById = async (id: number): Promise<Category> => {
    const category = await categoryRepo.findOneBy({ category_id: id });
    if (!category) throw new Error(`category of id: ${id} not found`);
    return category;
}

export const create = async (category_name: string): Promise<Category> => {
    const category = categoryRepo.create({ category_name });
    return await categoryRepo.save(category);
}

export const update = async (category_name: string, id: number): Promise<Category> => {
    const category = await categoryRepo.findOneBy({ category_id: id });
    if (!category) throw new Error(`category of id: ${id} not found`);

    category.category_name = category_name;
    return await categoryRepo.save(category);
}

export const remove = async (id: number): Promise<void> => {
    const category = await categoryRepo.findOne({ where: { category_id: id }, relations: ["items"] });

    if (!category) {
        throw new Error(`Category with ID ${id} not found`);
    }

    if (category.items.length > 0) {
        throw new Error(`Cannot delete category with ID ${id} as it has ${category.items.length} item(s) under it`);
    }

    await categoryRepo.delete({ category_id: id });

}