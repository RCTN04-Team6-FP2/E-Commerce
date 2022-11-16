import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features/products/productsSlice";
import swal from "sweetalert";

const AdminProduct = ({ product }) => {
  const [value, setValue] = useState(product.qty);
  const dispatch = useDispatch();

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
          <div className="d-flex flex-row align-items-center">
            <p className="card-text fs-5 mb-0">Stock:</p>
            <input
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              style={styles.input}
            ></input>
          </div>
          <button
            className="btn btn-outline-dark w-100"
            onClick={() => {
              dispatch(updateProduct({ product, value }));
              swal({
                text: "Success Update Stock!",
                icon: "success",
                button: false,
                timer: 1500,
              });
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    width: "100%",
    marginLeft: "5%",
    fontSize: "1.25rem",
  },
};

export default AdminProduct;
