
import { Router } from 'express';
import { CartController } from '../../controllers/cartController';

const router = Router();
const ctrl = new CartController();

router.get('/', ctrl.getCart);
router.post('/', ctrl.addToCart);
router.put('/:itemId', ctrl.updateCartItem);
router.delete('/:itemId', ctrl.removeCartItem);
router.delete('/', ctrl.clearCart);
router.get('/total', ctrl.getTotal);

export default router;
