import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../features/carts/cartsSlice";

const Counter = ({ buyQty, maxQty, cart }) => {
  const [counter, setCounter] = useState(buyQty);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleClickPlus = () => {
    setCounter(Number(counter) + 1);
  };

  const handleClickMin = () => {
    setCounter(Number(counter) - 1);
  };

  const handleMessage = () => {
    if (counter < 1) {
      setMessage("Minimal pembelian produk ini adalah 1 ");
      setCounter(1);
    } else if (counter > maxQty) {
      setMessage("Quantity pembelian sudah melebihi stock");
      setCounter(maxQty);
    } else if (1 < counter && counter < maxQty) {
      setMessage("");
    }
  };

  useEffect(() => {
    handleMessage();
    dispatch(updateCart({ cart, counter }));
  }, [counter]);

  return (
    <div>
      <div style={styles.container}>
        <Button style={styles.btn} onClick={() => handleClickMin()}>
          -
        </Button>
        <input
          type="number"
          value={counter}
          onChange={(e) => {
            setCounter(e.target.value);
            handleMessage();
          }}
          style={styles.counter}
        ></input>
        <Button style={styles.btn} onClick={() => handleClickPlus()}>
          +
        </Button>
        <button onClick={() => dispatch(deleteCart(cart))}>Delete</button>
      </div>
      <div>{message}</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  btn: {},
  counter: {
    fontSize: 25,
    width: 100,
    borderBottom: "1px solid black",
    textAlign: "center",
  },
};

export default Counter;
