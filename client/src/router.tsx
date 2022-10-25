import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
  Client, Freelancer, Job, JobsSearch, Landing, Login, Signup,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: '/jobs-search', element: <JobsSearch /> },
      { path: 'job/:id', element: <Job /> },
      { path: 'freelancer/:id', element: <Freelancer /> },
      { path: '/profile', element: <Client /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> },
]);

export default router;
