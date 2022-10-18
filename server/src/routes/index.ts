import express from 'express';
import jobsRouter from './jobs';
import proposalsRouter from './proposals';

const router = express.Router();

router.use('/jobs', jobsRouter);
router.use('/proposals', proposalsRouter);

export default router;
