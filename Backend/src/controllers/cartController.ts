import { Request, Response, NextFunction } from 'express';
import * as cartService from '../services/cartService';
import { User } from '../models/User';

declare global {
    namespace Express {
        interface Request { user?: User; }
    }
}

export class CartController {
    async getCart(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const cart = await cartService.getCart(userId);
            res.json(cart);
        } catch (err) {
            next(err);
        }
    }

    async addToCart(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const { itemId, quantity } = req.body;
            const cartItem = await cartService.addToCart(userId, +itemId, quantity);
            res.status(201).json(cartItem);
        } catch (err) {
            next(err);
        }
    }

    async updateCartItem(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const { itemId } = req.params;
            const { quantity } = req.body;
            const updatedItem = await cartService.updateCartItem(userId, +itemId, quantity);
            res.json(updatedItem);
        } catch (err) {
            next(err);
        }
    }

    async removeCartItem(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const { itemId } = req.params;
            await cartService.removeCartItem(userId, +itemId);
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    }

    async clearCart(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            await cartService.clearCart(userId);
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    }

    async getTotal(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await cartService.getCartTotal(req.user!);
            res.json(result);
        } catch (err) {
            next(err);
        }
    }

}
