import { Request } from 'express';
import { JobInstance } from '../interfaces';
import { Job, User } from '../models';
import { queryJobValidation } from '../validation';

const getJob = async (req: Request) => {
  const { id } = req.params;
  await queryJobValidation.validate(req.params);
  const job: JobInstance | null = await Job.findByPk(id, {
    include: {
      model: User,
      attributes: [
        'id',
        'email',
        'name',
        'role',
      ],
    },
  });
  if (!job) return { status: 200, msg: 'job not found' };
  return { status: 200, data: job };
};

export default getJob;
