import { Button, IconButton } from '@mui/material';
import { useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { UserContext } from '../../context/User';
import { PropsProposalCard } from '../../interfaces';
import './style.css';

function ProposalJob({ proposal }: PropsProposalCard) {
  const { user } = useContext(UserContext);
  return (
    <div className="wrapper-proposal ">
      <div className="content-proposal">
        {user?.role === 'client' ? (
          <h3>
            <Link to={`/freelancer/${proposal.freelancerId}`}>{proposal.freelancer?.user.name}</Link>
          </h3>
        ) : (
          <h3>
            <Link to={`/job/${proposal.jobId}`}>{proposal.job?.title}</Link>
          </h3>
        )}
        <div className="btn-proposal">
          {user?.role === 'client' ? (
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
          ) : (
            !proposal.isAccepted && (
              <div className="freelancer-prop-btns">
                <IconButton aria-label="delete">
                  <EditIcon htmlColor="#1C7925" />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon color="error" />
                </IconButton>
              </div>
            )
          )}
        </div>
      </div>
      <p>{proposal.description}</p>
      <div>
        <a className="link-attach" href={proposal.attachments}>
          See Attachements
        </a>
      </div>
      <div className="prop-date">
        {new Date(proposal.createdAt).toLocaleString()}
        <CalendarMonthIcon />
      </div>
    </div>
  );
}

export default ProposalJob;
