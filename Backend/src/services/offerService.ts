import { AppDataSource } from "../config/database";
import { Category } from "../models/Category";
import { Item } from "../models/Item";
import { Offer } from "../models/Offer";

const offerRepo = AppDataSource.getRepository(Offer);
const categoryRepo = AppDataSource.getRepository(Category);
const itemRepo = AppDataSource.getRepository(Item);

export const getAll = async (): Promise<Offer[]> => {
    return await offerRepo.find({ relations: ["category"] });
};

export const getById = async (id: number): Promise<Offer> => {
    const offer = await offerRepo.findOne({ where: { id }, relations: ["category"] });
    if (!offer) throw new Error("Offer not found");
    return offer;
};

export const create = async (category_id: number, offer_percentage: number): Promise<Offer> => {
    const category = await categoryRepo.findOne({ where: { category_id }, relations: ["items"] });
    if (!category) throw new Error("Category not found");

    const offer = await offerRepo.create({ offer_percentage, category });
    const saved = await offerRepo.save(offer);

    for (const item of category.items) {
        item.discount_price = Number(item.price) - (Number(item.price) * offer_percentage) / 100;
        await itemRepo.save(item);
    }
    return saved;
};

export const update = async (category_id: number, offer_percentage: number): Promise<Offer> => {
    const category = await categoryRepo.findOne({
        where: { category_id },
        relations: ["items", "offer"],
    });

    if (!category) throw new Error("Category not found");

    const offer = category.offer;
    if (!offer) throw new Error("No offer associated with this category");

    offer.offer_percentage = offer_percentage;
    const updatedOffer = await offerRepo.save(offer);

    for (const item of category.items) {
        item.discount_price = Number(item.price) - (Number(item.price) * offer_percentage) / 100;
        await itemRepo.save(item);
    }

    return updatedOffer;
};

export const remove = async (category_id: number): Promise<void> => {
    const category = await categoryRepo.findOne({
        where: { category_id },
        relations: ["items", "offer"],
    });

    if (!category) throw new Error("Category not found");

    const offer = category.offer;
    if (!offer) throw new Error("No offer associated with this category");

    offer.offer_percentage = 0;
    const noOffer = await offerRepo.save(offer);

    for (const item of category.items) {
        item.discount_price = item.price;
        await itemRepo.save(item);
    }

};


