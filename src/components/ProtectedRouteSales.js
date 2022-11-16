import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouteSales = ({ children }) => {
  let location = useLocation();

  if (localStorage.getItem("token") !== "isAdmin") {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRouteSales;
