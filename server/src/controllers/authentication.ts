import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { User, Freelancer } from '../models';
import { loginValidation, freelancerValidate } from '../validation';
import { generateToken, serverErrs } from '../helpers';
import { UserInstance } from '../interfaces';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  await loginValidation.validate({ email, password });

  const user = await User.findOne({ where: { email } });
  if (!user) throw serverErrs.BAD_REQUEST('Wrong Email Or Password');
  const result = await compare(password, user.password);

  if (!result) throw serverErrs.BAD_REQUEST('Wrong Email Or Password');

  const { name, role, id } = user;
  const token = await generateToken({ userID: id, role, name });
  res.cookie('token', token);
  return { status: 200, msg: 'logged in successfully' };
};
const freelancerSignUp = async (req: Request, res: Response) => {
  const {
    Title, Major, portfolio, description, image, id,
  } = req.body;
  const user: UserInstance | null = await User.findOne({ where: { id } });
  if (!user) throw serverErrs.BAD_REQUEST('user id doen\'t exist');
  const { name, role } = user;
  const token = await generateToken({ userID: id, role, name });

  await freelancerValidate.validate(req.body);

  const freelancer = await Freelancer.create({
    image,
    title: Title,
    major: Major,
    brief: description,
    userId: id,
    portfolio,
  });
  res.cookie('token', token);
  return { status: 200, data: freelancer, msg: 'successful login' };
};
export { login, freelancerSignUp };
