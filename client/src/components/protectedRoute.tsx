import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/User';

function ProtectedRoute({ children, isAuthClient }: any) {
  const { pathname } = useLocation(); // to redirect location
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/login" replace state={{ currentLocation: pathname }} />;
  }

  if (isAuthClient) {
    if (user?.role !== 'client') {
      return <Navigate to="/login" replace state={{ currentLocation: pathname }} />;
    }
  }
  return children;
}

function LoginProtectedRoute({ children }: any) {
  const { pathname, state } = useLocation(); // to redirect location
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to={state?.currentLocation || '/'} replace state={{ currentLocation: pathname }} />;
  }
  return children;
}
export { ProtectedRoute, LoginProtectedRoute };
