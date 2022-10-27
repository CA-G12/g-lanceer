import express from 'express';
import ExpressWrapper from '../ExpressWrapper';
import { login } from '../controllers';

const AuthRouter = express.Router();

AuthRouter.post('/login', ExpressWrapper(login));

export default AuthRouter;
