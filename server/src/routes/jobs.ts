import express from 'express';
import { searchJobs, getJob, deleteJob } from '../controllers';
import ExpressWrapper from '../ExpressWrapper';

const jobsRouter = express.Router();

jobsRouter.get('/', ExpressWrapper(searchJobs));
jobsRouter.get('/:id', ExpressWrapper(getJob));
jobsRouter.delete('/:id', deleteJob);

export default jobsRouter;
