import express from 'express';
import searchJobs from '../controllers';
import getJob from '../controllers/getJob';
import ExpressWrapper from '../ExpressWrapper';

const jobsRouter = express.Router();

jobsRouter.get('/', ExpressWrapper(searchJobs));
jobsRouter.get('/:id', ExpressWrapper(getJob));

export default jobsRouter;
