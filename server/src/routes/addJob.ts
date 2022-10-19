import express from 'express';
import { addJob } from '../controllers';
import ExpressWrapper from '../ExpressWrapper';
import { checkUserAuth, passportAuthenticate } from '../middlewares/auth';

const addJobRouter = express.Router();
addJobRouter.post('/', passportAuthenticate, checkUserAuth('client'), ExpressWrapper(addJob));

export default addJobRouter;
