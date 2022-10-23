import { Button } from '@mui/material';
import { PropsProposalCard } from '../../interfaces';
import './style.css';

function ProposalJob({ proposal }: PropsProposalCard) {
  return (
    <div className="wrapper-proposal ">
      <div className="content-proposal">
        <h3>{proposal.username}</h3>
        <div className="btn-proposal">
          {/* when the user is a freelancer, the accept btn appears */}
          {true && (
          <Button
            style={{
              fontSize: '10px',
              borderRadius: '20px',
              paddingLeft: '15px',
              paddingRight: '15px',
              backgroundColor: '#1C7925',
              color: '#fff',
            }}
          >
            Accept
          </Button>
          )}
        </div>
      </div>
      <p>{proposal.description}</p>
      <div>
        <a className="link-attach" href={proposal.attachments}>
          See Attachements
        </a>
      </div>
    </div>
  );
}

export default ProposalJob;
