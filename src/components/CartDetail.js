import { useDispatch } from "react-redux";
import { deleteCart } from "../features/carts/cartsSlice";
import Counter from "./Counter";

const CartDetail = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <tr key={cart.id} className="fs-5">
      <td>
        <img src={cart.image} alt="" style={{ width: "100%", height: 120 }} />
      </td>
      <td>{cart.title}</td>
      <td>${cart.price}</td>
      <td>
        <Counter buyQty={cart.buyQty} maxQty={cart.qty} cart={cart} />
      </td>
      <td>${(cart.buyQty * cart.price).toFixed(2)}</td>
      <td>
        <button onClick={() => dispatch(deleteCart(cart))}>
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartDetail;