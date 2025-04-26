import { Router } from "express";
import {
    getAllOffers,
    getOfferById,
} from "../../controllers/offerController";

const router = Router();

router.get("/", getAllOffers);
router.get("/:id", getOfferById);

export default router;
