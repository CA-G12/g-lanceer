import { Request, Response } from 'express';
import { Job, User } from '../models';
// import ExpressWrapper from '../ExpressWrapper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getJob = async (req:Request, res:Response) => {
  const { id } = req.params;
  // const job = await Job.findAll({
  //   where: {
  //     id,
  //   },
  //   include: [
  //     {
  //       model: User,
  //     },
  //   ],
  // });
  const job = await Job.findByPk(id, {
    include: User,
  });
  return { status: 200, data: job };
};

export default getJob;
