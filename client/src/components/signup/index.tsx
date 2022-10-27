import { InputLabel, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import ThirdStepSignUp from './thirdStep';
import { SignupProps } from '../../interfaces';
import { signUpSchema } from '../../validation';

import './style.css';

function Signup({ setActiveStep, userRole }: SignupProps) {
  const navigate = useNavigate();

  const checkUser = () => {
    if (userRole === 'freelancer') {
      setActiveStep((activeStep: number) => activeStep + 1);
    } else {
      navigate('/profile');
    }
  };
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values, 'valuessss');
      checkUser();
      formik.resetForm();
    },
  });

  return (
    <div className="s-u-form">
      <h3 className="header-signup-1">Welcome to Sign Up</h3>
      <form className="signup-form-1" onSubmit={formik.handleSubmit}>
        <div className="form-input">
          <InputLabel className="title-input">Username</InputLabel>
          <TextField
            className="input-login"
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.errors.userName ? formik.errors.userName : ' '}
            name="userName"
            id="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <InputLabel className="title-input">Email</InputLabel>
          <TextField
            className="input-login"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.errors.email ? formik.errors.email : ' '}
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <InputLabel className="title-input">Password</InputLabel>
          <TextField
            id="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password ? formik.errors.password : ' '}
            name="password"
            type="password"
            className="input-login"
            value={formik.values.password}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <InputLabel className="title-input">Confirm Password</InputLabel>
          <TextField
            id="confirmPassword"
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.errors.confirmPassword ? formik.errors.confirmPassword : ' '}
            name="confirmPassword"
            type="password"
            className="input-login"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          style={{ width: '25%', margin: '0 auto', marginTop: '10px' }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
export { Signup, ThirdStepSignUp };
