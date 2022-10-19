import express from 'express';
import addProposal from '../controllers/proposals';
import ExpressWrapper from '../ExpressWrapper';
import { checkUserAuth, passportAuthenticate } from '../middlewares/auth';

const proposalsRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
proposalsRouter.post('/', passportAuthenticate, checkUserAuth('freelancer'), ExpressWrapper(addProposal));

export default proposalsRouter;
