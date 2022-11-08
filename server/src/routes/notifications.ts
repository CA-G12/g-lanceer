import express from 'express';
import { getNotifications } from '../controllers';
import ExpressWrapper from '../ExpressWrapper';
import { passportAuthenticate } from '../middlewares/auth';

const notificationsRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
notificationsRouter.get('/', passportAuthenticate, ExpressWrapper(getNotifications));

export default notificationsRouter;
