import { Request, Response } from 'express';
import { compare, hash } from 'bcrypt';
import { User } from '../models';
import { loginValidation, signupUserValidation } from '../validation';
import { generateToken, serverErrs } from '../helpers';

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

const signupUser = async (req: Request, res: Response) => {
  const {
    role, name, email, password,
  } = req.body;
  await signupUserValidation.validate({
    role, name, email, password,
  });
  const client = await User.findOne({
    where: {
      email,
    },
  });
  if (client) throw serverErrs.BAD_REQUEST('email is already used');
  const hashedPassword = await hash(password, 12);
  const user = await User.create({
    role, name, email, password: hashedPassword,
  });
  const { id } = user;
  if (role === 'client') {
    const token = await generateToken({ name, role, userID: id });
    res.cookie('token', token);
  }
  return { status: 200, data: 'signed up successfully ' };
};

export { login, signupUser };
