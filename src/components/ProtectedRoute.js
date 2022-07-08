import { PropTypes } from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  redirectPath, isAllowed, element,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return element;
};

ProtectedRoute.defaultProps = {
  redirectPath: '/admin/login',
};

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
  isAllowed: PropTypes.bool.isRequired,
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
