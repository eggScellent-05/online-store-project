import { Router } from 'express';
import publicRoutes from './public';
import privateRoutes from './private';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use('/api', publicRoutes); // /api/auth/register, /api/auth/login
router.use('/api', authenticate, privateRoutes); // protect all private routes

export default router;