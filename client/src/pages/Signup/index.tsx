import { useState } from 'react';
import {
  Box, Step, Stepper, StepLabel, Button,
} from '@mui/material';
import Choose from '../../components/choose';
import Signup from '../../components/signup';
import './style.css';

function SignupPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [userRole, setUserRole] = useState('');

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        <Step key="1">
          <StepLabel />
        </Step>
        <Step key="2">
          <StepLabel />
        </Step>
        <Step key="3">
          <StepLabel />
        </Step>
      </Stepper>
      {/* {activeStep === 3 ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : ( */}
      <>
        <div className="steps">
          {activeStep === 0 && <Choose setUserRole={setUserRole} setActiveStep={setActiveStep} /> }
          {activeStep === 1 && <Signup setActiveStep={setActiveStep} userRole={userRole} /> }
          {activeStep === 2 && (
            <div>
              <h1>step 3</h1>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </div>
          ) }
        </div>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
        </Box>
      </>
      {/* )} */}
    </Box>
  );
}

export default SignupPage;
