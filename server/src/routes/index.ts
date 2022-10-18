/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import passport from 'passport';
import jobsRouter from './jobs';
import { mid, checkUserAuth, passportAuth } from '../middlewares/auth';

const router = express.Router();

passportAuth(passport);
router.use('/jobs', jobsRouter);
router.use('/client', mid, checkUserAuth('client'), (req, res) => {
  res.send('client');
});
router.use('/freelancer', mid, checkUserAuth('freelancer'), (req, res) => {
  res.send('freelancer');
});
export default router;
