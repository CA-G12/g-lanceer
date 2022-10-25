import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ProtectedRoute, LoginProtectedRoute } from './components/protectedRoute';
import {
  Client, Freelancer, Job, JobsSearch, Landing, Login, Signup,
} from './pages';

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
    <Signup />
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
        path: 'client/:id',
        element:
  <ProtectedRoute isAuthClient>
    <Client />
  </ProtectedRoute>,

      },
    ],
  },
  { path: '*', element: <h1>page not found</h1> },
]);

export default router;
