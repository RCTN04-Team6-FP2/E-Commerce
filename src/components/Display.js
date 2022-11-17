import { Outlet } from "react-router-dom";
import UserProduct from "./UserProduct";

const Display = ({ products }) => {
  return (
    <div className="container my-4 py-4">
      <div className="row">
        {products.map((product) => (
          <UserProduct product={product} key={product.id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Display;
