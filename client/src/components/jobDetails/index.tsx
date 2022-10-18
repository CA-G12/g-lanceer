import { Button } from '@mui/material';
import './style.css';

interface Job {
  title: string
  category: string,
  duration: string,
  description: string,
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
          <h2>{job.title}</h2>
        </div>
        <div className="content">
          <p>{job.description}</p>
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
