import express from 'express';
import { searchJobs, getJob, deleteJob } from '../controllers';
import ExpressWrapper from '../ExpressWrapper';
import { checkUserAuth, passportAuthenticate } from '../middlewares/auth';

const jobsRouter = express.Router();

jobsRouter.get('/', ExpressWrapper(searchJobs));
jobsRouter.get('/:id', ExpressWrapper(getJob));
jobsRouter.delete('/:id', passportAuthenticate, checkUserAuth('freelancer'), ExpressWrapper(deleteJob));

export default jobsRouter;
