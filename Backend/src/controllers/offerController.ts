import { Request, Response, NextFunction } from "express";
import * as OfferService from "../services/offerService"

export const getAllOffers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const offers = await OfferService.getAll();
        res.json(offers);
    } catch (err) {
        next(err);
    }
};

export const getOfferById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const offer = await OfferService.getById(Number(req.params.id));
        res.json(offer);
    } catch (err) {
        next(err);
    }
};

export const createOffer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const offer = await OfferService.create(req.body.category_id, req.body.offer_percentage);
        res.status(201).json(offer);
    } catch (err) {
        next(err);
    }
};

export const updateOffer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const offer = await OfferService.update(Number(req.params.id), req.body.offer_percentage);
        res.json(offer);
    } catch (err) {
        next(err);
    }
};

export const deleteOffer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await OfferService.remove(Number(req.params.id));
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};
