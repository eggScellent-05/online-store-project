import { Request, Response, NextFunction } from "express";
import * as ItemService from "../services/itemService";

export const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await ItemService.getAll();
        res.json(items);
    } catch (err) {
        next(err);
    }
};

export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await ItemService.getById(Number(req.params.id));
        res.json(item);
    } catch (err) {
        next(err);
    }
};

export const getItemByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await ItemService.getByCategory(Number(req.params.id));
        res.json(items);
    } catch (err) {
        next(err);
    }
};

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await ItemService.create(req.body);
        res.status(201).json(item);
    } catch (err) {
        next(err);
    }
};

export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updated = await ItemService.update(req.body, Number(req.params.id));
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await ItemService.remove(Number(req.params.id));
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};
