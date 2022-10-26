import { compare } from 'bcrypt';
import express, { Request } from 'express';
import ExpressWrapper from '../ExpressWrapper';
import { User } from '../models';
import { loginValidation } from '../validation';

const AuthRouter = express.Router();

const loginMiddleware = async (req: Request) => {
  const { email, password } = req.body;
  await loginValidation.validate({ email, password });
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return { status: 400, msg: 'User not found' };
  const result = await compare(password, user.password);
  if (!result) return { status: 400, msg: 'Wrong password' };

  return { status: 200, msg: 'logged in successfully' };
};
AuthRouter.post('/login', ExpressWrapper(loginMiddleware));

export default AuthRouter;
