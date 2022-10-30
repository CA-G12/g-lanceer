import express from 'express';
import ExpressWrapper from '../ExpressWrapper';
import { login, signupUser, freelancerSignUp } from '../controllers';

const AuthRouter = express.Router();

AuthRouter.post('/login', ExpressWrapper(login));
AuthRouter.post('/signup', ExpressWrapper(signupUser));
AuthRouter.post('/freelancer', ExpressWrapper(freelancerSignUp));

export default AuthRouter;
