import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import emptyCart from "../utils/imgs/empty-cart.svg";
import Table from "react-bootstrap/Table";
import Counter from "../components/Counter";
import {
  updateProduct,
  checkoutProduct,
} from "../features/products/productsSlice";
import { checkoutCart, deleteCart } from "../features/carts/cartsSlice";

const Cart = () => {
  const { carts } = useSelector((state) => state.persistedReducer.carts);
  const dispatch = useDispatch();

  const total = carts.reduce(
    (prev, current) => prev + current.buyQty * current.price,
    0
  );

  if (!carts.length) {
    return (
      <div>
        <Navbar />
        <div className="d-flex flex-column align-items-center">
          <img src={emptyCart} alt="" height="40%" width="40%" />
          <h1>Nothing Here ..</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div style={{marginBottom: "8%"}}className="mx-5 mt-5 bg-white">
        <Table striped bordered style={{ textAlign: "center"}}>
          <thead>
            <tr>
              <th style={{ width: "10%" }}></th>
              <th style={{ width: "30%" }}>Product</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "30%" }}>Quantity</th>
              <th style={{ width: "10%" }}>Total</th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
          </thead>
          <tbody style={{verticalAlign: "middle"}}>
            {carts.map((cart) => {
              return (
                <tr key={cart.id} className="fs-5">
                  <td>
                    <img
                      src={cart.image}
                      alt=""
                      style={{ width: "100%", height: 120 }}
                    />
                  </td>
                  <td>{cart.title}</td>
                  <td>${cart.price}</td>
                  <td>
                    <Counter
                      buyQty={cart.buyQty}
                      maxQty={cart.qty}
                      cart={cart}
                    />
                  </td>
                  <td>
                    ${(cart.buyQty * cart.price).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={() => dispatch(deleteCart(cart))}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div style={styles.footer}>
        <div className="mx-5 fs-5 fw-bold">Total: ${total.toFixed(2)}</div>
        <button className="btn btn-outline-dark fs-5 fw-bold"
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

export default Cart;
