import { Button } from '@mui/material';
import './style.css';

interface Job {
  title: string
  category: string,
  time: string,
  description: string,
  budget: number
}
interface Client {
  email:string,
  id:number,
  name:string,
  role:string,
}
interface Props {
  job:Job
  client: Client
}

function JobDetails({ job, client }: Props) {
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
              <span>{job.time}</span>
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
            <h3>{client.name}</h3>
            <h3>{client.email}</h3>
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
