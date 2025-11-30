import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const StudentProtectedRoute = ({ children }) => {
  const username = sessionStorage.getItem("username");

  if (!username) {
    return <Navigate to="/" replace />;
  }

  return children;
};
StudentProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StudentProtectedRoute;
