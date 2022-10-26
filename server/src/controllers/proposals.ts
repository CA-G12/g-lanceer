import { Request, Response } from 'express';
import { ProposalInstance } from '../interfaces';
import { Job, Proposal } from '../models';
import { postProposalValidation } from '../validation';
import { serverErrs } from '../helpers';
import sequelize from '../db/config/connection';

const addProposal = async (req: Request, res: Response) => {
  const {
    jobId,
    description,
    attachments,
  } = req.body;
  const freelancerId = res.locals.user.userID;
  await postProposalValidation.validate({
    jobId,
    description,
    attachments,
  });
  const proposal: ProposalInstance = await Proposal.create({
    jobId,
    freelancerId,
    description,
    attachments,
  });
  return { status: 201, data: proposal };
};
const deletePropsal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userID } = res.locals.user;

  const proposal: ProposalInstance | null = await Proposal.findByPk(id);
  if (!proposal) {
    throw serverErrs.BAD_REQUEST('proposal not found');
  } if (proposal.freelancerId !== userID) {
    throw serverErrs.UNAUTHORIZED('unauthorized');
  }
  if (proposal.isAccepted) {
    throw serverErrs.BAD_REQUEST('the job is already accepted');
  }
  await proposal.destroy();
  return { status: 200, msg: 'deleted successfully' };
};
const acceptProposal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userID } = res.locals.user;

  const proposal = await Proposal.findByPk(id);
  if (!proposal) throw serverErrs.BAD_REQUEST('Proposal Not Found');
  const { jobId } = proposal;
  const job = await Job.findByPk(jobId);
  if (job?.userId !== userID) throw serverErrs.UNAUTHORIZED('unauthorized');

  await sequelize.transaction(async (t) => {
    await proposal.update({ isAccepted: true }, { transaction: t });
    await Proposal.destroy({ where: { isAccepted: false, jobId }, transaction: t });
    await job?.update({ isOccupied: true }, { transaction: t });
  });
  return { status: 200, msg: 'Proposal Accepted' };
};

export { addProposal, deletePropsal, acceptProposal };
