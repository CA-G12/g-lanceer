import express from 'express';
import addProposal from '../controllers/proposals';
import ExpressWrapper from '../ExpressWrapper';

const proposalsRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
proposalsRouter.post('/', ExpressWrapper(addProposal));

export default proposalsRouter;
