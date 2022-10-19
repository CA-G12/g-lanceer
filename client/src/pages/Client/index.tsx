import ProposalJob from '../../components/proposalJob/index';

interface ProposalClient {
  username: string
  description: string,
  attachements: string,
}

const client: ProposalClient = {
  username: 'Ahmed Safi',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quis soluta ipsa minima.',
  attachements: 'https://www.freelancer.com/u/eTranslators?w=f&ngsw-bypass=',
};
function Client() {
  return (
    <ProposalJob client={client} />
  );
}

export default Client;
