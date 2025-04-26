import { AppDataSource } from "../config/database";
import { ApiError } from "../middleware/errorHandler";
import { Cart } from "../models/Cart";
import { Item } from "../models/Item";
import { User } from "../models/User";

const cartRepo = AppDataSource.getRepository(Cart);
const itemRepo = AppDataSource.getRepository(Item);

export const getCart = async (userId: number) => {
    const cartItems = await cartRepo.find({
        where: { user: { id: userId } },
        relations: ['item', 'item.category', 'item.category.offer'],
    });

    return cartItems.map((entry) => {
        const basePrice = entry.item.price;
        const discount = entry.item.category.offer?.offer_percentage || 0;
        const discountedPrice = basePrice - (basePrice * discount) / 100;

        return {
            itemId: entry.item.id,
            name: entry.item.title,
            quantity: entry.quantity,
            price: basePrice,
            discountedPrice,
            totalPrice: discountedPrice * entry.quantity,
        };
    })
};

export const addToCart = async (userId: number, itemId: number, quantity: number) => {
    const item = await itemRepo.findOneBy({ id: itemId });
    if (!item) throw new ApiError("Item not found", 404);

    let cartEntry = await cartRepo.findOne({
        where: { user: { id: userId }, item: { id: itemId } },
        relations: ['user', 'item'],
    })

    if (cartEntry) {
        cartEntry.quantity += quantity;
    }
    else {
        cartEntry = cartRepo.create({
            user: { id: userId },
            item: { id: itemId },
            quantity
        });
    }

    await cartRepo.save(cartEntry);
    return cartEntry;
};


export const updateCartItem = async (userId: number, itemId: number, quantity: number) => {
    let cartEntry = await cartRepo.findOne({
        where: { user: { id: userId }, item: { id: itemId } },
        relations: ['user', 'item'],
    })

    if (!cartEntry) throw new ApiError('Cart item not found', 404);
    cartEntry.quantity = quantity;
    return await cartRepo.save(cartEntry)
};

export const removeCartItem = async (userId: number, itemId: number) => {
    const cartEntry = await cartRepo.findOne({
        where: { user: { id: userId }, item: { id: itemId } },
    });

    if (!cartEntry) throw new ApiError('Cart item not found', 404);
    await cartRepo.remove(cartEntry);
};

export const clearCart = async (userId: number) => {
    await cartRepo.delete({ user: { id: userId } });
};

export const getCartTotal = async (user: User) => {
    const cartItems = await cartRepo.find({
        where: { user },
        relations: ['item', 'item.category', 'item.category.offer'],
    });

    let total = 0;

    for (const cart of cartItems) {
        const item = cart.item;
        const basePrice = item.price;
        const quantity = cart.quantity;

        const offer = item.category?.offer;
        const discount = offer ? (basePrice * offer?.offer_percentage) / 100 : 0;
        const finalPrice = basePrice - discount;

        total += finalPrice * quantity;
    }

    return { total };
};