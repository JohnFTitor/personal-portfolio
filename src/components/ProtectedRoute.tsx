import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  element: React.ReactElement;
  redirectPath?: string;
}

const ProtectedRoute = ({
  isAllowed,
  element,
  redirectPath = '/admin/login',
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return element;
};

export default ProtectedRoute;
