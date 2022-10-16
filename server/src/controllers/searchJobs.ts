import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { Job, Proposal } from '../models';

const searchJobs = async (req:Request, res:Response) => {
  const { title } = req.query;
  const jobs = await Job.findAll({
    attributes: {
      include: [
        'title',
        'description',
        'category',
        'budget',
        'isOccupied',
      ],
    },
    where: {
      title: {
        [Sequelize.Op.iLike]: `%${title}%`,
      },
    },
    include: [
      {
        model: Proposal,
        attributes: { include: ['jobId'] },
      },
    ],
  });
  if (jobs.length === 0) {
    res.status(200).json({ message: 'No jobs found' });
  } else {
    res.status(200).json(jobs);
  }
};

export default searchJobs;
