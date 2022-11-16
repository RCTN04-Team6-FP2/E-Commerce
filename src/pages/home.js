import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AdminProduct from "../components/AdminProduct";
import Categories from "../components/Categories";
import Display from "../components/Display";
import Navbar from "../components/Navbar";

const Home = () => {
  const { categories } = useSelector(
    (state) => state.persistedReducer.categories
  );
  const { products } = useSelector((state) => state.persistedReducer.products);

  if (localStorage.getItem("token") === "isAdmin") {
    return (
      <div>
        <Navbar />
        <div className="container my-4 py-4">
          <div className="row">
            {products.map((product) => (
              <AdminProduct product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Categories />
      <Routes>
        <Route path="/" element={<Display products={products} />}></Route>
        {categories.map((category) => {
          const categoryProduct = products.filter(
            (product) => product.category === category
          );
          return (
            <Route
              path={category}
              element={<Display products={categoryProduct} />}
              key={category}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
};

export default Home;
