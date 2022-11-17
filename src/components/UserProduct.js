import { useState } from "react";
import Detail from "../pages/detail";

const UserProduct = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 p-4" key={product.id}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          height="250px"
        />
        <div className="card-body p-0 pt-3 d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <p className="card-text fs-5 mb-1">
              {product.rating.rate} <i className="fa fa-star" /> (
              {product.rating.count})
            </p>
            <p className="card-text lead mb-2">${product.price}</p>
          </div>
          <button
            className="btn btn-outline-dark w-100"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Detail
          </button>
        </div>
      </div>
      <Detail
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
      />
    </div>
  );
};

export default UserProduct;
