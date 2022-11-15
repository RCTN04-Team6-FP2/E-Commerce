import { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { addCart } from "../features/carts/cartsSlice";
import swal from "sweetalert";

const Detail = (props) => {
  const dispatch = useDispatch();
  // const [message, setMessage] = useState("");

  // const handleClickPlus = () => {
  //   setCounter(Number(counter) + 1);
  // };

  // const handleClickMin = () => {
  //   setCounter(Number(counter) - 1);
  // };

  // const handleMessage = () => {
  //   if (counter < 1) {
  //     setMessage("Minimal pembelian produk ini adalah 1 ");
  //     setCounter(1);
  //   } else if (counter > props.product.qty) {
  //     setMessage("Qty pembelian sudah melebihi stock");
  //     setCounter(20);
  //   }
  //   else if (1 < counter && counter < props.product.qty) {
  //     setMessage("");
  //   }
  // };

  // useEffect(() => {
  //   handleMessage();
  // }, [counter]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.content}>
        <img src={`${props.product.image}`} alt="" style={styles.img} />
        <div style={styles.detail}>
          <p>{props.product.description}</p>
          <p>Price: ${props.product.price}</p>
          <p>Category: {props.product.category}</p>
          <p>Stock: {props.product.qty}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
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
          }}
        >
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const styles = {
  content: {
    display: "flex",
    padding: "3%",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
    margin: "0 5% 0 0",
  },
  detail: {
    display: "flex",
    flexDirection: "column",
  },
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

export default Detail;
