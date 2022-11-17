import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/products/productsSlice";
import Home from "./pages/home";
import Login from "./pages/login";
import Cart from "./pages/cart";
import { fetchUsers } from "./features/users/usersSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import Sales from "./pages/sales";

function App() {
  const dispatch = useDispatch();

  const doFetchProductsAndUsers = () => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  };

  useEffect(() => {
    doFetchProductsAndUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<Home />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute token={"isUser"}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute token={"isAdmin"}>
              <Sales />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
