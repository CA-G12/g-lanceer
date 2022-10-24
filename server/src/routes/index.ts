import express from 'express';
import passport from 'passport';
import jobsRouter from './jobs';
import proposalsRouter from './proposals';
import { passportAuthenticate, checkUserAuth, passportAuth } from '../middlewares/auth';
import getUserData from '../middlewares/getUserData';
import ExpressWrapper from '../ExpressWrapper';
import getClientData from '../controllers/client';

const router = express.Router();

passportAuth(passport);
router.use('/jobs', jobsRouter);
router.use('/proposals', proposalsRouter);
router.get('/user', passportAuthenticate, ExpressWrapper(getUserData));
router.use('/client', passportAuthenticate, checkUserAuth('client'), ExpressWrapper(getClientData));
router.use('/freelancer', passportAuthenticate, checkUserAuth('freelancer'), (req, res) => {
  res.send('freelancer');
});
export default router;
