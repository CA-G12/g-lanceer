import { useContext, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import { Alert, InputLabel, Snackbar } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../validation';
import formImg from '../../assets/4957136 1.png';
import './style.css';
import { login } from '../../helpers';
import UserContext from '../../context';

function Login() {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState<boolean>(false);
  // const navigate = useNavigate();
  // const { state } = useLocation();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setError(false);
      try {
        const { data } = await login(values);
        formik.resetForm();
        console.log(data.data, 'from login');

        if (setUser) setUser(data.data);
      } catch (err) {
        setError(true);
      } finally {
        formik.setSubmitting(false);
      }
    },
  });
  return (
    <div className="login">
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
            variant="outlined"
          />
        </div>
        <div className="form-bottom">
          <LoadingButton
            id="submit"
            type="submit"
            loadingPosition="start"
            loading={formik.isSubmitting}
            variant="outlined"
            className="btn-login"
          >
            Sign In
          </LoadingButton>
          <span>
            Dont have an account?
            <Link to="/signup" className="link-signup"> Sign Up</Link>
          </span>
        </div>

      </form>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          Wrong Email or Password !
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
