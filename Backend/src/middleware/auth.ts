import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ApiError } from './errorHandler';
import { User } from '../models/User';
import { AppDataSource } from '../config/database';

declare global {
    namespace Express { interface Request { user?: User; } }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new ApiError('No token provided', 401);

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.findOne({ where: { id: decoded.id } });
        if (!user) throw new ApiError('User not found', 401);
        req.user = user;
        next();
    } catch {
        throw new ApiError('Invalid token', 401);
    }
};

export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role)) {
            throw new ApiError('Unauthorized', 403);
        }
        next();
    };
};
