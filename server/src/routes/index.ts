import express from 'express';
import jobsRouter from './jobs';

const router = express.Router();

router.use('/jobs', jobsRouter);

export default router;
