import { RequestHandler } from 'express';

const getUserData: RequestHandler = (req, res) => {
  const { user } = res.locals;

  res.status(200).send(user);
};

export default getUserData;
