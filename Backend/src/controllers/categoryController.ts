import { NextFunction, Request, Response } from "express";
import * as categoryService from "../services/categoryService";

export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await categoryService.getAll();
        res.json(categories);
    } catch (err) {
        next(err);
    }
};

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await categoryService.getById(Number(req.params.id));
        res.json(category);
    } catch (err) {
        next(err);
    }
};

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newCategory = await categoryService.create(req.body.category_name);
        res.status(201).json(newCategory);
    } catch (err) {
        next(err);
    }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updated = await categoryService.update(req.body.category_name, Number(req.params.id));
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await categoryService.remove(Number(req.params.id));
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};