import { Request, Response, NextFunction } from "express";
import * as AuthService from "../services/authService";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, password } = req.body;
        const user = await AuthService.registerUser(username, email, password);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const result = await AuthService.loginUser(email, password);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

