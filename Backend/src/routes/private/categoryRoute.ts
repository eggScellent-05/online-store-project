import { Router } from "express";
import { createCategory, deleteCategory, updateCategory } from "../../controllers/categoryController";

import { validateCategory } from '../../middleware/validators';
import { authorize } from '../../middleware/auth';


const router = Router();

router.post("/", authorize(['admin', 'manager']), validateCategory, createCategory);
router.put("/:id", authorize(['admin', 'manager']), validateCategory, updateCategory);
router.delete("/:id", authorize(['admin']), deleteCategory);

export default router;