import { Request, Response, NextFunction } from 'express';
import { ApiError } from './errorHandler';

export const validateAuth = (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body;
    if (!email || !password) throw new ApiError('Email and password are required', 400);
    // if (!/\S+@\S+\.\S+/.test(email)) throw new ApiError('Invalid email', 400);
    // if (req.path.includes('register') && (!name || name.length < 3)) throw new ApiError('Name must be ≥3 chars', 400);
    next();
};

export const validateCategory = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if (!name || !name.trim()) throw new ApiError('Category name is required', 400);
    next();
};

export const validateItem = (req: Request, res: Response, next: NextFunction) => {
    const { name, price, categoryId } = req.body;
    if (!name || !name.trim()) throw new ApiError('Item name is required', 400);
    if (price !== undefined && (isNaN(price) || price < 0)) throw new ApiError('Price must be ≥0', 400);
    if (!categoryId || isNaN(categoryId)) throw new ApiError('Valid categoryId is required', 400);
    next();
};