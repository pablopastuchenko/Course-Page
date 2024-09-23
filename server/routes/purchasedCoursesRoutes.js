import express from 'express';

import { authenticateToken } from '../middlewares/authenticateToken.js';
import { getPurchasedCourses } from '../controllers/purchasedCoursesController.js';


const router = express.Router();

router.get("/purchased-courses", authenticateToken, getPurchasedCourses);

export default router;
