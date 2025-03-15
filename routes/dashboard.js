import express from 'express';
import { getDashboardStats } from '../controllers/dashboard.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, getDashboardStats);

export default router;
