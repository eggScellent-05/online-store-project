import { Router } from "express";
import {
    createOffer,
    updateOffer,
    deleteOffer,
} from "../../controllers/offerController";
import { authorize } from "../../middleware/auth";

const router = Router();

router.post("/", authorize(['admin', 'manager']), createOffer);
router.put("/:id", authorize(['admin', 'manager']), updateOffer);
router.delete("/:id", authorize(['admin']), deleteOffer);

export default router;
