import {
  Button, Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

interface Job {
  title: string,
  description: string,
  budget: number,
  proposals: []
}

interface JobProps {
  job: Job,
  id: number,
}

function JobCard({ job, id }: JobProps) {
  const {
    title, description, budget, proposals,
  } = job;
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="job-card">
        <Link to={`/job/${id}`}>
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
          >
            {title}
          </Typography>
          <p className="description">
            {description}
          </p>
        </Link>
        <div className="second-section">
          <div className="budget-proposal-section">
            <div className="proposals">
              proposals:
              <span>
                {' '}
                {proposals.length}
              </span>
            </div>
            <div className="budget">
              budget:
              <span>
                $
                {budget}
              </span>
            </div>
          </div>
          <Button
            style={{
              fontSize: '12px',
              borderRadius: '20px',
              paddingLeft: '15px',
              paddingRight: '15px',
            }}
            onClick={() => navigate(`/job/${id}`)}
            variant="contained"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>

  );
}

export default JobCard;
