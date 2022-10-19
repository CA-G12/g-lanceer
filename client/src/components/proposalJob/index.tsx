import { Button } from '@mui/material';
import './style.css';

interface Client {
  username: string
  description: string,
  attachements: string,
}
interface Props {
  client:Client
}

function ProposalJob({ client }: Props) {
  // when the user is a freelancer, the accept btn appears
  const btnShow = (value:string) => {
    if (value === 'freelancerUser') {
      return 'inlineBlock';
    }
    return 'none';
  };
  return (
    <div className="wrapper-proposal ">
      <div className="content-proposal">
        <h3>{client.username}</h3>
        <div className="btn-proposal">
          <Button
            style={{
              fontSize: '10px',
              borderRadius: '20px',
              paddingLeft: '15px',
              paddingRight: '15px',
              backgroundColor: '#1C7925',
              color: '#fff',
              display: btnShow('freelancerUser'),
            }}
          >
            Accept
          </Button>
        </div>
      </div>
      <p>{client.description}</p>
      <div>
        <a className="link-attach" href={client.attachements}>
          See Attachements
        </a>
      </div>
    </div>
  );
}

export default ProposalJob;
