import { Request } from 'express';
import { queryJobValidation } from '../validation/index';

import { Job } from '../models';

const deleteJob = async (req:Request) => {
  const { id } = req.params;
  await queryJobValidation.validate(req.params);
  const job = await Job.findOne({
    where: {
      id,
      isOccupied: false,
    },
  });
  if (!job) {
    return { status: 400, msg: 'Job not found!' };
  }
  await job.destroy();

  return { status: 200, msg: 'Job deleted' };
};

export default deleteJob;
