import express from 'express';
import searchJobs from '../controllers';
import ExpressWrapper from '../ExpressWrapper';

const jobsRouter = express.Router();

jobsRouter.get('/', ExpressWrapper(searchJobs));

export default jobsRouter;
