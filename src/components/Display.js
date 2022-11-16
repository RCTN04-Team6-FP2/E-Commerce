import { Outlet } from "react-router-dom";
import ProductContainer from "./ProductContainer";

const Display = ({ products }) => {
  return (
    <div className="container my-4 py-4">
      <div className="row">
        {products.map((product) => (
          <ProductContainer product={product} key={product.id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Display;
