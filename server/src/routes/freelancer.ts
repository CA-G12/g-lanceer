import express from 'express';
import { getFreelancer } from '../controllers';
import ExpressWrapper from '../ExpressWrapper';
import { passportAuthenticate } from '../middlewares/auth';

const freelancerRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
freelancerRouter.get('/:id', passportAuthenticate, ExpressWrapper(getFreelancer));

export default freelancerRouter;
