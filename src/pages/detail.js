import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addCart } from "../features/carts/cartsSlice";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Detail = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Modal {...props} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="fs-3">
          {props.product.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center">
        <div className="mx-5">
          <img
            src={props.product.image}
            alt={props.product.title}
            height="300px"
            width="300px"
          />
        </div>
        <div className="mx-5">
          <h4 className="text-uppercase text-black-50 mb-3">
            {props.product.category}
          </h4>
          <p className="lead fw-bolder">
            Rating {props.product.rating.rate}
            <i className="fa fa-star"></i> ({props.product.rating.count})
          </p>
          <h3 className="display-6 fw-bold mb-3">$ {props.product.price}</h3>
          <p className="lead">{props.product.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="fs-5 fw-bolder mx-3">Stock: {props.product.qty}</div>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            if (localStorage.getItem("token") === "isUser") {
              if (props.product.qty !== 0) {
                dispatch(addCart({ ...props.product }));
                props.onHide();
                swal({
                  text: "Success Added to Cart!",
                  icon: "success",
                  button: false,
                  timer: 1500,
                });
              } else {
                swal({
                  text: "Out of Stock!",
                  icon: "error",
                  button: false,
                  timer: 1500,
                });
              }
            } else {
              navigate("/login");
            }
          }}
        >
          Add to Cart
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Detail;
