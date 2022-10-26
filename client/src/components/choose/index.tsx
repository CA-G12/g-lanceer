import './style.css';
import { Button } from '@mui/material';

function Choose() {
  return (
    <>
      <h2>Join as a Client or Freelancer</h2>
      <div className="choose-container">
        <Button
          variant="contained"
          type="submit"
          style={{ width: '25%', marginTop: '10px' }}
        >
          Freelancer
        </Button>
        <Button
          variant="contained"
          type="submit"
          style={{ width: '25%', marginTop: '10px' }}
        >
          Client
        </Button>
        {/* <h2>Join as a Client or Freelancer</h2>
      <div className="img-container">
        <div className="freelancer-div">
          <span> I am a Freelancer</span>
        </div>
        <div className="client-div">
          <span> I am a Client</span>
        </div>
      </div> */}
      </div>
    </>
  );
}

export default Choose;
