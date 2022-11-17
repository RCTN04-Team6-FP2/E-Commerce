import { useDispatch } from "react-redux";
import { checkoutCart } from "../features/carts/cartsSlice";
import {
  checkoutProduct,
  updateProduct,
} from "../features/products/productsSlice";

const CartFooter = ({ carts }) => {
  const dispatch = useDispatch();

  const total = carts.reduce(
    (prev, current) => prev + current.buyQty * current.price,
    0
  );

  return (
    <div style={styles.footer}>
      <div className="mx-5 fs-5 fw-bold">Total: ${total.toFixed(2)}</div>
      <button
        className="btn btn-outline-dark fs-5 fw-bold"
        onClick={() => {
          // eslint-disable-next-line array-callback-return
          carts.map((product) => {
            const value = Number(product.qty - product.buyQty);
            dispatch(checkoutProduct(product));
            dispatch(updateProduct({ product, value }));
          });
          dispatch(checkoutCart());
        }}
      >
        Checkout
      </button>
    </div>
  );
};

const styles = {
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100vw",
    height: "10%",
    paddingRight: "5%",
    backgroundColor: "lightgrey",
    position: "fixed",
    bottom: 0,
  },
};

export default CartFooter;
