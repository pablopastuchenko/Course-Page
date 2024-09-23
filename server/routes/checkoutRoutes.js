import express from 'express';
import  { createCheckoutSession } from '../controllers/checkoutController.js';
import {authenticateToken} from '../middlewares/authenticateToken.js';

const router = express.Router();

router.post("/create-checkout-session", authenticateToken, createCheckoutSession);

export default router;
