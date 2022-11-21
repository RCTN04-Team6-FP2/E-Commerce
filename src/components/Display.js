import { useParams } from "react-router-dom";
import HandleNothing from "./HandleNothing";
import UserProduct from "./UserProduct";
import nothingDisplay from "../utils/imgs/nothing-display.svg"

const Display = ({ products }) => {
  let params = useParams();

  if (params.productCategory) {
    const categoryProduct = products.filter(
      (product) => product.category === params.productCategory
    );
    products = categoryProduct;
  }

  if (!products.length) {
    return <HandleNothing img={nothingDisplay}/>
  }

  return (
    <div className="container my-4 py-4">
      <div className="row">
        {products.map((product) => (
          <UserProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Display;
