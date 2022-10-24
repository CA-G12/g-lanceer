import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import { InputLabel } from '@mui/material';
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
      setTimeout(() => {
        formik.resetForm();
        formik.setSubmitting(false);
      }, 3000);
    },
  });
  return (
    <div className="login container">
      <div className="form-img">
        <img src={formImg} alt="login img" />
      </div>
      <form className="form-login" onSubmit={formik.handleSubmit}>
        <h2 className="title-login">Welcome to Glancer</h2>
        <div className="form-email">
          <InputLabel className="title-input">Email</InputLabel>
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
            placeholder="Enter your Password here"
            variant="outlined"
          />
        </div>
        <div className="form-bottom">
          <LoadingButton
            id="submit"
            type="submit"
            // loading
            loadingPosition="start"
            loading={formik.isSubmitting}
            variant="outlined"
            className="btn-login"
          >
            Sign In
          </LoadingButton>
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
