import { PropTypes } from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  redirectPath = '/admin/login', isAllowed, element,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return element;
};

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string.isRequired,
  isAllowed: PropTypes.bool.isRequired,
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
