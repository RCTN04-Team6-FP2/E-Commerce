import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import emptyCart from "../utils/imgs/empty-cart.svg";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import Counter from "../components/Counter";
import { updateProduct, checkoutProduct } from "../features/products/productsSlice";
import { checkoutCart } from "../features/carts/cartsSlice";

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
        <img src={emptyCart} alt="" style={styles.img} />
        <h1>Nothing Here ..</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div style={{ padding: "3% 3% 8%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => {
                return (
                  <tr key={cart.id}>
                    <td style={{ width: "10%" }}>
                      <img
                        src={cart.image}
                        alt=""
                        style={{ width: "100%", height: 120 }}
                      />
                    </td>
                    <td style={{ width: "30%" }}>{cart.title}</td>
                    <td style={{ width: "10%" }}>${cart.price}</td>
                    <td style={{ width: "30%" }}>
                      <Counter
                        buyQty={cart.buyQty}
                        maxQty={cart.qty}
                        cart={cart}
                      />
                    </td>
                    <td style={{ width: "20%" }}>
                      ${(cart.buyQty * cart.price).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div style={styles.footer}>
          <div>Total: ${total.toFixed(2)}</div>
          <Button
            onClick={() => {
              carts.map((product) => {
                const value = Number(product.qty - product.buyQty);
                dispatch(checkoutProduct(product));
                dispatch(updateProduct({ product, value }));
              });
              dispatch(checkoutCart());
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    );
  }
};

const styles = {
  img: {
    width: "50%",
  },
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
