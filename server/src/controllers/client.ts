import { Request, Response } from 'express';
import { Job } from '../models';

const getClientData = async (req: Request, res: Response) => {
  const id = res.locals.user.userID;
  const clientData = await Job.findAndCountAll({
    where: {
      userId: id,
    },
  });
  const occupiedJobs = clientData.rows.filter((job) => job.isOccupied === true);
  const unOccupiedJobs = clientData.rows.filter((job) => job.isOccupied === false);

  return { status: 200, data: { count: clientData.count, occupiedJobs, unOccupiedJobs } };
};

export default getClientData;
