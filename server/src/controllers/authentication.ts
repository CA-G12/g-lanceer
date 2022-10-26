import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { User } from '../models';
import { loginValidation } from '../validation';
import { generateToken } from '../helpers';

const loginMiddleware = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  await loginValidation.validate({ email, password });

  const user = await User.findOne({ where: { email } });
  if (!user) return { status: 400, msg: 'User not found' };

  const result = await compare(password, user.password);
  if (!result) return { status: 400, msg: 'Wrong password' };

  const { name, role, id } = user;
  const token = await generateToken({ userID: id, role, name });
  res.cookie('token', token);
  return { status: 200, msg: 'logged in successfully' };
};
export default loginMiddleware;
