import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  redirectPath: string;
  isAllowed: boolean;
  element: React.ReactElement;
}

const ProtectedRoute = ({
  redirectPath = '/admin/login',
  isAllowed,
  element
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return element;
};

export default ProtectedRoute;
