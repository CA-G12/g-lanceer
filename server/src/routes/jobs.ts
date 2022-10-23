import express from 'express';
import {
  searchJobs, getJob, addJob, deleteJob,
} from '../controllers';
import ExpressWrapper from '../ExpressWrapper';
import { checkUserAuth, passportAuthenticate } from '../middlewares/auth';

const jobsRouter = express.Router();

jobsRouter.get('/', ExpressWrapper(searchJobs));
jobsRouter.get('/:id', ExpressWrapper(getJob));
jobsRouter.post('/', passportAuthenticate, checkUserAuth('client'), ExpressWrapper(addJob));
jobsRouter.delete('/:id', passportAuthenticate, checkUserAuth('client'), ExpressWrapper(deleteJob));

export default jobsRouter;
