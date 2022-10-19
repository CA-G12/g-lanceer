import { Job } from '../models';
import { addJobValidation } from '../validation';

const addJob = async (req: any) => {
  const {
    title,
    budget,
    time,
    category,
    description,
  } = req.body;
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
  });
  return { status: 201, data: job };
};
export default addJob;
