import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/User';

function ProtectedRoute({ children, isAuthClient }: any) {
  const { pathname } = useLocation(); // to redirect location
  console.log(pathname);
  const context = useContext(UserContext);
  console.log(context);

  if (!context.user) {
    console.log(context.user, 'userrrrr');
    return <Navigate to="/login" replace state={{ currentLocation: pathname }} />;
  }

  if (isAuthClient) {
    if (context.user?.role !== 'client') {
      return <Navigate to="/login" replace state={{ currentLocation: pathname }} />;
    }
  }
  return children;
}

function LoginProtectedRoute({ children }: any) {
  const { pathname } = useLocation(); // to redirect location
  console.log(pathname);
  const context = useContext(UserContext);
  console.log(context);

  if (context.user) {
    console.log(context.user, 'userrrrr');
    return <Navigate to="/" replace state={{ currentLocation: pathname }} />;
  }
  return children;
}
export { ProtectedRoute, LoginProtectedRoute };
