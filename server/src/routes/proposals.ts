import express from 'express';
import { addProposal, deletePropsal } from '../controllers';
import ExpressWrapper from '../ExpressWrapper';
import { checkUserAuth, passportAuthenticate } from '../middlewares/auth';

const proposalsRouter = express.Router();

proposalsRouter.post('/', passportAuthenticate, checkUserAuth('freelancer'), ExpressWrapper(addProposal));
proposalsRouter.delete('/:id', passportAuthenticate, checkUserAuth('freelancer'), ExpressWrapper(deletePropsal));
export default proposalsRouter;
