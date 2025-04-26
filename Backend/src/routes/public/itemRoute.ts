import { Router } from "express";
import {
    getAllItems,
    getItemById,
    getItemByCategory,
} from "../../controllers/itemController";


const router = Router();

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.get("/category/:id", getItemByCategory);

export default router;