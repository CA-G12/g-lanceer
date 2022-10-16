import {
  Button, Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

interface Job {
  title: string,
  description: string,
  budget: number
}

interface JobProps {
  job: Job
}

function JobCard({ job }: JobProps) {
  const { title, description, budget } = job;
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
              <span>3</span>
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
            onClick={() => navigate('/job/jobid')}
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
