import { AuthRequest } from '../interfaces';
import { Job } from '../models';
import { addJobValidation } from '../validation';

const addJob = async (req: AuthRequest) => {
  const {
    title,
    budget,
    time,
    category,
    description,
  } = req.body;
  const userId = req.user?.userID;

  await addJobValidation.validate({
    title,
    description,
    category,
    budget,
    time,
  });
  const job = await Job.create({
    title,
    description,
    category,
    budget,
    time,
    userId,
  });
  return { status: 201, data: job };
};
export default addJob;
