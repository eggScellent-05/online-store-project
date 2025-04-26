import { Router } from 'express';
import * as AuthController from '../../controllers/authController';
import { validateAuth } from '../../middleware/validators';


const router = Router();

router.post('/register', validateAuth, AuthController.register);
router.post('/login', validateAuth, AuthController.login);

export default router;