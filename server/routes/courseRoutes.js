import express from 'express';
import { getCourseDetails } from '../controllers/courseController.js';

const router = express.Router();

router.get("/:id", getCourseDetails);

export default router;
