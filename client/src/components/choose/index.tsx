import './style.css';
import { Button } from '@mui/material';

function Choose({ setUserRole, setActiveStep }: any) {
  const handleClick = (role: string) => {
    setUserRole(role);
    setActiveStep((activeStep: number) => activeStep + 1);
  };
  return (
    <>
      <h2>Join as a Client or Freelancer</h2>
      <div className="choose-container">
        <Button
          variant="contained"
          onClick={() => handleClick('freelancer')}
          style={{ width: '25%', height: '60px' }}

        >
          Freelancer
        </Button>
        <Button
          variant="contained"
          onClick={() => handleClick('client')}
          style={{ width: '25%', height: '60px' }}
        >
          Client
        </Button>
      </div>
    </>
  );
}

export default Choose;
