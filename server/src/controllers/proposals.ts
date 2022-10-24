import { Request, Response } from 'express';
import { ProposalInstance } from '../interfaces';
import { Proposal } from '../models';
import { postProposalValidation } from '../validation';
import { serverErrs } from '../helpers';

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
    throw serverErrs.BAD_REQUEST('unauthorized');
  } if (userID === proposal.freelancerId) {
    if (proposal.isAccepted) {
      throw serverErrs.BAD_REQUEST('unauthorized');
    }
  }
  await proposal.destroy();
  return { status: 201, msg: 'deleted successfult' };
};

export { addProposal, deletePropsal };
