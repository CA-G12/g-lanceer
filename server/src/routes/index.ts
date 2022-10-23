import express from 'express';
import passport from 'passport';
import jobsRouter from './jobs';
import proposalsRouter from './proposals';
import { passportAuthenticate, checkUserAuth, passportAuth } from '../middlewares/auth';
import getUserData from '../middlewares/getUserData';

const router = express.Router();

passportAuth(passport);
router.use('/jobs', jobsRouter);
router.use('/proposals', proposalsRouter);
router.get('/user', passportAuthenticate, getUserData);
router.use('/client', passportAuthenticate, checkUserAuth('client'), (req, res) => {
  res.send('client');
});
router.use('/freelancer', passportAuthenticate, checkUserAuth('freelancer'), (req, res) => {
  res.send('freelancer');
});
export default router;
