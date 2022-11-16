import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouteCart = ({ children }) => {
  let location = useLocation();

  if (localStorage.getItem("token") !== "isUser") {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRouteCart;
