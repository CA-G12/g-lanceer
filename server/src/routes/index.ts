import express, { Request, Response } from 'express';
import getJob from '../controllers/getJob';
import ExpressWrapper from '../ExpressWrapper';

const router = express.Router();

router.get('/', (req:Request, res:Response) => {
  res.send('Hello Word');
});
router.get('/job/:id', ExpressWrapper(getJob));

export default router;
