import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Cart from "./pages/cart";
import ProtectedRoute from "./components/ProtectedRoute";
import Sales from "./pages/sales";
import Display from "./components/Display";
import { useSelector } from "react-redux";

function App() {
  const { products } = useSelector((state) => state.persistedReducer.products);
  const filteredProducts = products.filter((product) => product.qty > 0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home products={products} />}>
          <Route path="/" element={<Display products={filteredProducts} />} />
          <Route
            path=":productCategory"
            element={<Display products={filteredProducts} />}
          />
        </Route>
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
