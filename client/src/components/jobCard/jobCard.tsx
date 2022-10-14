import {
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import './jobCard.css';

function JobCard() {
  return (
    <div className="content">
      <div className="job-card">
        <Link to="/job/jobid">
          <h2 className="h2">
            Graphic Design
          </h2>
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
          <Link to="/job/jobid">
            <Button
              className="apply-job-btn"
              style={{
                backgroundColor: '#1C3879',
                color: '#fff',
                fontSize: '12px',
                borderRadius: '20px',
                width: '100%',
                paddingLeft: '15px',
                paddingRight: '15px',
              }}
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
