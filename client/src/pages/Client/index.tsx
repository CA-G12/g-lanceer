import ProposalJob from '../../components/proposalJob/index';

interface Proposal {
  username: string
  description: string,
  attachements: string,
}

const proposal: Proposal = {
  username: 'Ahmed Safi',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quis soluta ipsa minima.',
  attachements: 'https://www.freelancer.com/u/eTranslators?w=f&ngsw-bypass=',
};
function Client() {
  return (
    <ProposalJob proposal={proposal} />
  );
}

export default Client;
