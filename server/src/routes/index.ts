import express from 'express';
import passport from 'passport';
import jobsRouter from './jobs';
import proposalsRouter from './proposals';
import { passportAuthenticate, checkUserAuth, passportAuth } from '../middlewares/auth';
import getUserData from '../middlewares/getUserData';
import ExpressWrapper from '../ExpressWrapper';
import freelancerRouter from './freelancer';

const router = express.Router();

passportAuth(passport);
router.use('/jobs', jobsRouter);
router.use('/proposals', proposalsRouter);
router.use('/freelancer', freelancerRouter);
router.get('/user', passportAuthenticate, ExpressWrapper(getUserData));
router.use('/client', passportAuthenticate, checkUserAuth('client'), (req, res) => {
  res.send('client');
});
export default router;
