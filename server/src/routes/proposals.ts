import express from 'express';
import { addProposal, deletePropsal, editProposal } from '../controllers';

import ExpressWrapper from '../ExpressWrapper';
import { checkUserAuth, passportAuthenticate } from '../middlewares/auth';

const proposalsRouter = express.Router();

proposalsRouter.post('/', passportAuthenticate, checkUserAuth('freelancer'), ExpressWrapper(addProposal));
proposalsRouter.delete('/:id', passportAuthenticate, checkUserAuth('freelancer'), ExpressWrapper(deletePropsal));
proposalsRouter.put('/:id', passportAuthenticate, checkUserAuth('freelancer'), ExpressWrapper(editProposal));
export default proposalsRouter;
