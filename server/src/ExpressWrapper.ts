import {
  RequestHandler,
} from 'express';
import { ControllerFunction } from './interfaces';

const ExpressWrapper = (fn: ControllerFunction): RequestHandler => async (req, res, next) => {
  try {
    const { status, data = null, msg = null } = await fn(req, res, next);
    res.status(status).json({ msg, data });
  } catch (error: any) { // change the type of error when installing yup
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: error.errors });
    } else if (error.status) {
      res.status(error.status).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server Error' });
    }
  }
};
export default ExpressWrapper;
