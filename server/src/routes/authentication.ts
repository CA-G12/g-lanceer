import express from 'express';
import ExpressWrapper from '../ExpressWrapper';
import { loginMiddleware } from '../controllers';

const AuthRouter = express.Router();

AuthRouter.post('/login', ExpressWrapper(loginMiddleware));

export default AuthRouter;
