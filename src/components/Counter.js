import { useCounter } from "../hooks/Counter.hook";

const Counter = ({ buyQty, maxQty, cart }) => {
  const {
    counter,
    setCounter,
    message,
    handleClickPlus,
    handleClickMin,
    handleMessage,
  } = useCounter({ buyQty, maxQty, cart });

  return (
    <div>
      <div style={styles.container}>
        <button
          className="btn btn-outline-dark"
          onClick={() => handleClickMin()}
        >
          <i className="fa fa-minus"></i>
        </button>
        <input
          type="number"
          value={counter}
          onChange={(e) => {
            setCounter(e.target.value);
            handleMessage();
          }}
          style={styles.counter}
        ></input>
        <button
          className="btn btn-outline-dark"
          onClick={() => handleClickPlus()}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <div style={styles.message}>{message}</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 25,
    width: 100,
    borderBottom: "1px solid black",
    textAlign: "center",
  },
  message: {
    fontSize: 15,
    color: "red",
  },
};

export default Counter;
