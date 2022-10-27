import express from 'express';
import ExpressWrapper from '../ExpressWrapper';
import { login, signupUser } from '../controllers';

const AuthRouter = express.Router();

AuthRouter.post('/login', ExpressWrapper(login));
AuthRouter.post('/signup', ExpressWrapper(signupUser));

export default AuthRouter;
