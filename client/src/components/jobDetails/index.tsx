import { Button } from '@mui/material';
import './style.css';

interface Job {
  category: string,
  duration: string,
  budget: number
}
interface Props {
  job:Job
}

function JobDetails({ job }: Props) {
  return (
    <div className="wrapper ">
      <div className="details">
        <div className="top">
          <h2>Job Details</h2>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus quam, quasi
            consequuntur ut perferendis tempora mollitia
            assumenda nostrum accusamus maiores facere delectus
            nobis nisi magni? Consequatur corporis saepe dolorum modi.
          </p>
          <div className="jobs-details">
            <p>
              category:
              <span>{job.category}</span>
            </p>
            <p>
              duration:
              <span>{job.duration}</span>
            </p>
            <p>
              budget:
              <span>
                $
                {job.budget}
              </span>
            </p>
          </div>
          <div className="link-btn">
            <Button
              className="button"
              variant="contained"
            >
              Apply Now
            </Button>

          </div>
        </div>
      </div>
      <div className="about">
        <div className="top">
          <h2>About the client</h2>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus quam, quasi
            consequuntur ut perferendis tempora mollitia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
