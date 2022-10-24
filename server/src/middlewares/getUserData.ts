import { Request, Response } from 'express';

const getUserData = async (req: Request, res: Response) => {
  const { user } = res.locals;
  return { status: 200, data: user };
};

export default getUserData;
