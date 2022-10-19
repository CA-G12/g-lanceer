import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';
import { JobForm } from '../../components';
import ProposalJob from '../../components/proposalJob/index';

interface Proposal {
  username: string
  description: string,
  attachments: string,
}

const proposal: Proposal = {
  username: 'Ahmed Safi',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quis soluta ipsa minima.',
  attachments: 'https://www.freelancer.com/u/eTranslators?w=f&ngsw-bypass=',
};
function Client() {
  const { id } = useParams();
  const [showModel, setShowModel] = useState(false);
  const handleOpen = () => setShowModel(true);
  const handleClose = () => setShowModel(false);
  return (
    <div>
      <h1>
        client
        {id}
      </h1>
      <Button onClick={handleOpen}>Open modal</Button>
      <JobForm showModel={showModel} handelClose={handleClose} />
      <ProposalJob proposal={proposal} />
    </div>
  );
}

export default Client;
