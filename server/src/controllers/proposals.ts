import { AuthRequest } from '../interfaces';
import { Proposal } from '../models';
import { postProposalValidation } from '../validation';

const addProposal = async (req: AuthRequest) => {
  const {
    jobId,
    description,
    attachments,
  } = req.body;
  const freelancerId = req.user?.userID;
  await postProposalValidation.validate({
    jobId,
    description,
    attachments,
  });
  const proposal = await Proposal.create({
    jobId,
    freelancerId,
    description,
    attachments,
    isAccepted: false,
  });
  return { status: 200, data: proposal };// false
};

export default addProposal;
