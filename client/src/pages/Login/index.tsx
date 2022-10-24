import { useFormik } from 'formik';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../validation';
import formImg from '../../assets/4957136 1.png';
import './style.css';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values, 'valuessss');
      formik.resetForm();
    },
  });
  return (
    <div className="login container">
      <div className="form-img">
        <img src={formImg} alt="" />
      </div>
      <form className="form-login" onSubmit={formik.handleSubmit}>
        <h2 className="title-login">Welcome to Glancer</h2>
        <div className="form-email">
          <h3>Email</h3>
          <TextField
            className="input-login"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.errors.email ? formik.errors.email : ' '}
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your Email here"
            variant="outlined"
          />
        </div>
        <div className="form-password">
          <h3>Password</h3>
          <TextField
            id="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password ? formik.errors.password : ' '}
            name="password"
            type="password"
            className="input-login"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your Password here"
            variant="outlined"
          />
          <span>Forgot password?</span>
        </div>
        <div className="form-bottom">
          <Button
            variant="contained"
            type="submit"
            style={{ width: '30%' }}
          >
            Sign In
          </Button>
          <span>
            Already have an account?
            <Link to="/signup" className="link-signup"> Sign Up</Link>
          </span>
        </div>

      </form>

    </div>
  );
}

export default Login;
