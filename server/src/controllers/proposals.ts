import { Request, Response } from 'express';
import { ProposalInstance } from '../interfaces';
import { Proposal } from '../models';
import { editProposalValidation, postProposalValidation } from '../validation';
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
    throw serverErrs.UNAUTHORIZED('unauthorized');
  }
  if (proposal.isAccepted) {
    throw serverErrs.BAD_REQUEST('the job is already accepted');
  }
  await proposal.destroy();
  return { status: 200, msg: 'deleted successfully' };
};

const editProposal = async (req: Request, res:Response) => {
  const { id } = req.params;
  const { userID } = res.locals.user;
  const {
    description,
    attachments,
  } = req.body;
  await editProposalValidation.validate({
    description,
    attachments,
  });
  const proposal = await Proposal.findByPk(id);
  if (proposal?.freelancerId !== userID) throw serverErrs.UNAUTHORIZED('unauthorized');
  if (proposal?.isAccepted) throw serverErrs.BAD_REQUEST('you cant delete it, proposal already accepted');
  const updatedProposal = await Proposal.update(
    {
      description,
      attachments,
    },
    {
      where: {
        id,
      },
    },
  );
  return { status: 200, data: updatedProposal, msg: 'updated' };
};
export { addProposal, deletePropsal, editProposal };
