import { Request, Response } from 'express';
import generateToken from '../helpers/jwt';
import { FreelancerWithProposalsInstance, ProposalInstance } from '../interfaces';
import {
  Freelancer, Job, Proposal, User,
} from '../models';
import { updateFreelancerValidation } from '../validation';

const getFreelancer = async (req: Request, res: Response) => {
  const paramsUserId = req.params.id;
  const { userID } = res.locals.user;

  const freelancer: FreelancerWithProposalsInstance | null = await Freelancer.findOne(
    {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Proposal,
          where: { isAccepted: userID === Number(paramsUserId) ? [false, true] : true },
          required: false,
          include: [{ model: Job, attributes: ['title'] }],
        }],
      where: { id: paramsUserId },
    },
  );

  if (freelancer) {
    const acceptedProposals: ProposalInstance[] = [];
    const pendingProposals: ProposalInstance[] = [];
    freelancer?.proposals.forEach((p: ProposalInstance) => {
      if (p.isAccepted) {
        acceptedProposals.push(p);
      } else {
        pendingProposals.push(p);
      }
    });
    const freelancerUser = freelancer.toJSON();
    if (userID === Number(paramsUserId)) {
      freelancerUser.proposals = { acceptedProposals, pendingProposals };
    } else {
      freelancerUser.proposals = { acceptedProposals };
    }
    return { status: 200, data: freelancerUser };
  }
  return { status: 400, msg: 'Freelancer Not Found' };
};

const updateFreelancerInfo = async (req: Request, res: Response) => {
  const { userID } = res.locals.user;
  await updateFreelancerValidation.validate(req.body);

  if (req.body.name) {
    await User.update(
      { name: req.body.name },
      { where: { id: userID } },
    );
    const { user } = res.locals;
    const newToken = await generateToken({ ...user, name: req.body.name });
    res.cookie('token', newToken);
  }
  const UpdatedFreelancer = await Freelancer.update(
    req.body,
    { where: { userId: userID } },
  );
  return { status: 200, msg: UpdatedFreelancer[0] ? 'Freelancer Updated successfully' : 'No updated records' };
};

export { getFreelancer, updateFreelancerInfo };
