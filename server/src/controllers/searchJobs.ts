import Sequelize, { WhereOptions } from 'sequelize';
import { Request } from 'express';
import queryValidation from '../validation/index';

import { Job, Proposal } from '../models';

const JOBS_PER_PAGE = 8;
const searchJobs = async (req:Request) => {
  const {
    title, page = 1, budget, category,
  } = req.query;

  await queryValidation.validate(req.query);
  const where:WhereOptions<any> | undefined = { isOccupied: false };
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

  const jobs = await Job.findAndCountAll({
    attributes: [
      'title',
      'description',
      'category',
      'budget',
      'isOccupied',
    ],
    where,
    include: [
      {
        model: Proposal,
        attributes: { include: ['jobId'] },
      },
    ],
    distinct: true,
    limit: JOBS_PER_PAGE,
    offset: (Number(page) - 1) * JOBS_PER_PAGE,
  });
  return { status: 200, data: jobs };
};

export default searchJobs;
