import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Display from "./Display";
import Navbar from "./Navbar";

const UserHome = ({ products }) => {
  const { categories } = useSelector(
    (state) => state.persistedReducer.categories
  );

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

export default UserHome;
