import { Router } from 'express';
import { createProduct, getProducts, removeProduct, updateProduct } from '../controllers/productController.js';

const router = Router();
router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', removeProduct);

export default router;
