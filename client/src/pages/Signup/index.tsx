import * as React from 'react';
import {
  Box, Step, Stepper, StepLabel, Button, Typography,
} from '@mui/material';
import Choose from '../../components/choose';
import Signup from '../../components/signup';
import './style.css';

function SignupPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box sx={{ width: '50%', margin: '0 auto' }}>
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
      {activeStep === 3 ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <div style={{ width: '100%' }}>
            {activeStep === 0 && <div><Choose /></div> }
            {activeStep === 1 && <Signup /> }
            {activeStep === 2 && <h1>choose3</h1> }
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === 2 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default SignupPage;
