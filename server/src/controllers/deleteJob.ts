import { Request } from 'express';
import { queryJobValidation } from '../validation/index';

import { Job, User } from '../models';
import { serverErrs } from '../helpers';
// import { serverErrs } from '../helpers';

const deleteJob = async (req:Request) : Promise<any> => {
  const { id } = req.params;
  // const { userID } = res.locals.user; after update the passport middleware
  const userID = 2;
  await queryJobValidation.validate(req.params);
  const job = await Job.findByPk(id, {
    include: {
      model: User,
      attributes: [
      ],
    },
  });
  if (!job) {
    throw serverErrs.BAD_REQUEST('job not found');
  }
  if (job?.isOccupied) {
    throw serverErrs.BAD_REQUEST('job is Occupied');
  }
  if (userID === job.userId) {
    await job.destroy();
    return { status: 200, msg: 'Job deleted' };
  }

  throw serverErrs.UNAUTHORIZED('UNAUTHORIZED');

  // throw serverErrs.UNAUTHORIZED('you are not authorized');
};

export default deleteJob;
