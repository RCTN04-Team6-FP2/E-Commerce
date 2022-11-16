import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Detail from "../pages/detail";

const ProductContainer = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

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
              if (localStorage.getItem("token") === "isUser") {
                setModalShow(true);
              } else navigate("/login");
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

export default ProductContainer;
