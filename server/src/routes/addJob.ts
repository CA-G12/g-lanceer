import express from 'express';
import { addJob } from '../controllers';
import ExpressWrapper from '../ExpressWrapper';

const addJobRouter = express.Router();
addJobRouter.post('/', ExpressWrapper(addJob));

export default addJobRouter;
