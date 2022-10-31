import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorNotFound from './components/notFound';
import { ProtectedRoute, LoginProtectedRoute } from './components/protectedRoute';
import {
  Client, Freelancer, Job, JobsSearch, Landing, Login,
} from './pages';
import SignupPage from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: 'login',
        element:
  <LoginProtectedRoute>
    <Login />
  </LoginProtectedRoute>,
      },
      {
        path: 'signup',
        element:
  <LoginProtectedRoute>
    <SignupPage />
  </LoginProtectedRoute>,
      },
      { path: '/jobs-search', element: <JobsSearch /> },
      {
        path: 'job/:id',
        element:
  <ProtectedRoute>
    {' '}
    <Job />
  </ProtectedRoute>,
      },
      {
        path: 'freelancer/:id',
        element:
  <ProtectedRoute>
    {' '}
    <Freelancer />
  </ProtectedRoute>,
      },
      {
        path: '/profile',
        element:
  <ProtectedRoute isAuthClient>
    <Client />
  </ProtectedRoute>,

      },
    ],
  },
  { path: '*', element: <ErrorNotFound /> },
]);

export default router;
