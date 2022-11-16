import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../features/carts/cartsSlice";

export const useCounter = ({ buyQty, maxQty, cart }) => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return { counter, setCounter, message, handleClickPlus, handleClickMin, handleMessage };
};
