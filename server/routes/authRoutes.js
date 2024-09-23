import express from 'express';
import {login, protectedRoute, refreshToken, register} from '../controllers/authController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.get("/protected", authenticateToken, protectedRoute);

export default router;
