import express, { Request, Response } from 'express';
import searchJobs from '../controllers';

const router = express.Router();

router.get('/', (req:Request, res:Response) => {
  res.send('Hello Word');
});

router.get('/jobs-search', searchJobs);

export default router;
