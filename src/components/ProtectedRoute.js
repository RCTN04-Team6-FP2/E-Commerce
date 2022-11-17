import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
  if (localStorage.getItem("token") !== token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
