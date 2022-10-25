import {
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';
import { JobPropsCard } from '../../interfaces';

function JobCard({
  job, children,
}: JobPropsCard) {
  const {
    title, description,
  } = job;

  return (
    <div className="content">
      <div className="job-card">
        <Link to={`/job/${job.id}`}>
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
          >
            {title}
          </Typography>
          <div className="description">
            {description}
          </div>
        </Link>
        <div className="second-section">
          {children}
        </div>
      </div>
    </div>

  );
}

export default JobCard;
