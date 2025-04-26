import { Router } from 'express';
import itemRoutes from './itemRoute';
import categoryRoutes from './categoryRoute';
import offerRoutes from './offerRoute';
import cartRoutes from './cartRoute';

const router = Router();

router.use('/items', itemRoutes);
router.use('/categories', categoryRoutes);
router.use('/offers', offerRoutes);
router.use('/cart', cartRoutes);

export default router;