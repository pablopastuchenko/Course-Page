import express from 'express';
import { getCourseContent } from '../controllers/courseContentController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';


const router = express.Router();

router.get("/course-content/:id", authenticateToken, getCourseContent);

export default router;
