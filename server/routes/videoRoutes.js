import express from 'express';
import  { getVideo } from '../controllers/videoController.js';

const router = express.Router();

router.get('/videos/:id', getVideo);

export default router;
