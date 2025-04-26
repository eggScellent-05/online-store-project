import { Router } from "express";
import {
    createItem,
    updateItem,
    deleteItem,
} from "../../controllers/itemController";

import { validateItem } from '../../middleware/validators';
import { authorize } from '../../middleware/auth';


const router = Router();


router.post("/", authorize(['admin', 'manager']), validateItem, createItem);
router.put("/:id", authorize(['admin', 'manager']), validateItem, updateItem);
router.delete("/:id", authorize(['admin']), deleteItem);

export default router;
