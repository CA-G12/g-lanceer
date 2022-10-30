import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { User, Freelancer } from '../models';
import { loginValidation, freelancerValidate } from '../validation';
import { generateToken, serverErrs } from '../helpers';
import { UserInstance } from '../interfaces';

const login = async (req: Request, res: Response) => {
  let id;
  const { email, password } = req.body;
  await loginValidation.validate({ email, password });

  const user = await User.findOne({ where: { email } });
  if (!user) throw serverErrs.BAD_REQUEST('Wrong Email Or Password');
  const result = await compare(password, user.password);
  if (!result) throw serverErrs.BAD_REQUEST('Wrong Email Or Password');

  const { name, role } = user;
  id = user.id;
  if (user.role === 'freelancer') {
    const freelancer = await Freelancer.findOne({ where: { userId: user.id } });
    if (freelancer) id = freelancer?.id;
  }
  const token = await generateToken({ userID: id, role, name });
  res.cookie('token', token);
  return { status: 200, msg: 'logged in successfully', data: { userID: id, role, name } };
};
const freelancerSignUp = async (req: Request, res: Response) => {
  const {
    title, major, portfolio, brief, image, userId,
  } = req.body;
  await freelancerValidate.validate(req.body);

  const user: UserInstance | null = await User.findOne({ where: { id: userId } });
  if (!user) throw serverErrs.BAD_REQUEST('Somthing went wrong');
  const { name, role } = user;

  const freelancer = await Freelancer.create({
    image,
    title,
    major,
    brief,
    userId,
    portfolio,
  });
  const token = await generateToken({ userID: freelancer.id, role, name });

  res.cookie('token', token);
  return { status: 201, data: freelancer, msg: 'successful login' };
};
export { login, freelancerSignUp };
