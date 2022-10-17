import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css';

function jobDetails() {
  return (
    <div className="wrapper">
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
          <Link to="/" className="link-btn">
            <Button
              className="join-freelance-button"
              variant="contained"
              style={{
                backgroundColor: '#1C3879',
                color: '#fff',
                padding: '.5rem 2rem',
                marginTop: '30px',
                fontSize: '20px',
              }}
            >
              Apply Now
            </Button>

          </Link>
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
            consequuntur ut perferendis tempora mollitia
            assumenda nostrum accusamus maiores facere delectus
            nobis nisi magni? Consequatur corporis saepe dolorum modi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default jobDetails;
