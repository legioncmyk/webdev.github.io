import { Router } from 'express';
import { createOrder, getOrdersByUser } from '../controllers/orderController.js';

const router = Router();
router.post('/order', createOrder);
router.get('/order/:userId', getOrdersByUser);

export default router;
