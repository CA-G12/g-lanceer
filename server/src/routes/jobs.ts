import express from 'express';
import {
  searchJobs, getJob, addJob, deleteJob,
} from '../controllers';
import ExpressWrapper from '../ExpressWrapper';
import { checkUserAuth, passportAuthenticate } from '../middlewares/auth';

const jobsRouter = express.Router();

jobsRouter.route('/')
  .get(ExpressWrapper(searchJobs))
  .post(passportAuthenticate, checkUserAuth('client'), ExpressWrapper(addJob));

jobsRouter.route('/:id')
  .get(ExpressWrapper(getJob))
  .delete(passportAuthenticate, checkUserAuth('client'), ExpressWrapper(deleteJob));
// jobsRouter.get('/:id', ExpressWrapper(getJob));
//   jobsRouter.get('/', ExpressWrapper(searchJobs));
// jobsRouter.post('/', passportAuthenticate, checkUserAuth('client'), ExpressWrapper(addJob));
// jobsRouter.delete('/:id', passportAuthenticate,
//  checkUserAuth('client'), ExpressWrapper(deleteJob));

export default jobsRouter;
