import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { carts } = useSelector((state) => state.persistedReducer.carts);
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.nav}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom border-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-1" to="/">
            BUKAPEDIA
          </Link>
          <div className="buttons">
            {localStorage.getItem("token") === "isUser" && (
              <Link to="/cart" className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {carts.length})
              </Link>
            )}
            {localStorage.getItem("token") === "isAdmin" && (
              <Link to="/sales" className="btn btn-outline-dark">
                <i className="fa fa-book me-1"></i> Rekap Penjualan
              </Link>
            )}
            {!localStorage.getItem("token") && (
              <Link to="/login" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i> Login
              </Link>
            )}
            {localStorage.getItem("token") && (
              <button
                onClick={() => handleLogout()}
                className="btn btn-outline-dark ms-4"
              >
                <i className="fa fa-sign-out me-1"></i> Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
};

export default Navbar;
