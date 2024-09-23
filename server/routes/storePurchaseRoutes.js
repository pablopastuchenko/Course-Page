import express from 'express';
import { storePurchase } from '../controllers/storePurchaseController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';


const router = express.Router();

router.post('/store-purchase', authenticateToken, storePurchase);

export default router;
