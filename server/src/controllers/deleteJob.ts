import { Request, Response } from 'express';
import { queryJobValidation } from '../validation/index';

import { Job, User } from '../models';
import { serverErrs } from '../helpers';
import { JobInstance } from '../interfaces';

const deleteJob = async (req:Request, res:Response) => {
  const { id } = req.params;
  const { userID } = res.locals.user;
  await queryJobValidation.validate(req.params);
  const job:JobInstance | null = await Job.findByPk(id);
  if (!job) {
    throw serverErrs.BAD_REQUEST('job not found');
  }
  if (userID === job.userId) {
    if (job.isOccupied) {
      throw serverErrs.BAD_REQUEST('job is Occupied');
    }
    await job.destroy();
    return { status: 200, msg: 'Job deleted' };
  }

  throw serverErrs.UNAUTHORIZED('you are not authorized');
};

export default deleteJob;
