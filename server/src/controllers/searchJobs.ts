import Sequelize, { WhereOptions } from 'sequelize';
import { Request } from 'express';
import { queryValidation } from '../validation/index';

import { Job, Proposal } from '../models';
import { JobInstance } from '../interfaces';

const JOBS_PER_PAGE = 5;
const searchJobs = async (req: Request) => {
  const {
    title, page = 1, budget, category,
  } = req.query;

  await queryValidation.validate(req.query);
  const where: WhereOptions | undefined = { isOccupied: false };
  if (title) {
    where.title = {
      [Sequelize.Op.iLike]: `%${title}%`,
    };
  }
  if (budget) {
    where.budget = {
      [Sequelize.Op.gte]: budget,
    };
  }

  if (category) {
    where.category = category;
  }

  const jobs: { count: number, rows: JobInstance[] } = await Job.findAndCountAll({
    attributes: [
      'id',
      'title',
      'description',
      'category',
      'budget',
      'isOccupied',
    ],
    where,
    include:
    {
      model: Proposal,
    },
    distinct: true,
    limit: JOBS_PER_PAGE,
    offset: (Number(page) - 1) * JOBS_PER_PAGE,
  });
  return { status: 200, data: jobs };
};

export default searchJobs;
