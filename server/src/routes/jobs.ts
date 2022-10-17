import express from 'express';
import { searchJobs, getJob } from '../controllers';
import ExpressWrapper from '../ExpressWrapper';

const jobsRouter = express.Router();

jobsRouter.get('/', ExpressWrapper(searchJobs));
jobsRouter.get('/:id', ExpressWrapper(getJob));

export default jobsRouter;
