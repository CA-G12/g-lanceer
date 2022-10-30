import express from 'express';
import ExpressWrapper from '../ExpressWrapper';
import { login, freelancerSignUp } from '../controllers';

const AuthRouter = express.Router();

AuthRouter.post('/login', ExpressWrapper(login));
AuthRouter.post('/freelancer', ExpressWrapper(freelancerSignUp));

export default AuthRouter;
