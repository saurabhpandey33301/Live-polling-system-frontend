import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const TeacherProtectedRoute = ({ children }) => {
  const username = sessionStorage.getItem("username");

  if (!username || !username.startsWith("teacher")) {
    return <Navigate to="/" replace />;
  }

  return children;
};
TeacherProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default TeacherProtectedRoute;
