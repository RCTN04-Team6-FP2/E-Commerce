import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import emptyCart from "../utils/imgs/empty-cart.svg";
import Table from "react-bootstrap/Table";
import HandleNothing from "../components/HandleNothing";
import CartDetail from "../components/CartDetail";
import CartFooter from "../components/CartFooter";

const Cart = () => {
  const { carts } = useSelector((state) => state.persistedReducer.carts);

  if (!carts.length) {
    return (
      <div>
        <Navbar />
        <HandleNothing img={emptyCart} />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: "8%" }} className="mx-5 mt-5 bg-white">
        <Table striped bordered style={{ textAlign: "center" }}>
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
          <tbody style={{ verticalAlign: "middle" }}>
            {carts.map((cart) => {
              return <CartDetail cart={cart} key={cart.id} />;
            })}
          </tbody>
        </Table>
      </div>
      <CartFooter carts={carts} />
    </div>
  );
};

export default Cart;
