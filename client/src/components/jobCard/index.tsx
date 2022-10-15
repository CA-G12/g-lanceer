import {
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import './style.css';

function JobCard() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="job-card">
        <Link to="/job/jobid">
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
          >
            Graphic Design
          </Typography>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            nisi molestiae praesentium eum repellat expedita sit reicien quas
            perferendis beatae nam ipsum in neque cumque corporis id commod
          </p>
        </Link>
        <div className="second-section">
          <div className="budget-proposal-section">
            <div className="proposals">
              proposals:
              <span>3</span>
            </div>
            <div className="budget">
              budget:
              <span>$50</span>
            </div>
          </div>
          <Button
            className="apply-job-btn"
            color="secondary"
            style={{
              backgroundColor: '#1C3879',
              fontSize: '12px',
              borderRadius: '20px',
              width: '13%',
              paddingLeft: '15px',
              paddingRight: '15px',
            }}
            onClick={() => navigate('/job/jobid')}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
