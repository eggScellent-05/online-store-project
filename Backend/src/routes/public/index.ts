import { Router } from 'express';
import authRoutes from './authRoute';
import itemRoutes from './itemRoute';
import categoryRoutes from './categoryRoute';
import offerRoutes from './offerRoute';

const router = Router();
router.use('/auth', authRoutes);
router.use('/items', itemRoutes);
router.use('/categories', categoryRoutes);
router.use('/offers', offerRoutes);

export default router;