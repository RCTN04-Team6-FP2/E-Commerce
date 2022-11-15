import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Detail from "../pages/detail";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features/products/productsSlice";

const AdminProduct = ({ product }) => {
  const [value, setValue] = useState(product.qty)
  const dispatch = useDispatch();

  return (
    <Card style={styles.card}>
      <Card.Img variant="top" src={product.image} style={styles.img} />
      <Card.Body style={styles.content}>
        <div style={styles.text}>
          <Card.Title style={styles.title}>{product.title}</Card.Title>
          <input value={value} onChange={(e) => setValue(Number(e.target.value))}></input>
        </div>
        <Button
          variant={"outline-secondary"}
          style={styles.btnDetail}
          onClick={() => {
            dispatch(updateProduct({product, value}))        
          }}
        >
          Update
        </Button>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    display: "flex",
    width: "20%",
    height: "90%",
    margin: "1%",
    textAlign: "left",
    borderRadius: 20,
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 15px",
    fontFamily: "'Poppins', sans-serif",
  },
  img: {
    width: "50%",
    height: 150,
    margin: "5% 5% 0",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    flex: 1,
  },
  source: {
    marginTop: 0,
    fontSize: 14,
    margin: "0 2%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "2%",
  },
  desc: {
    margin: "2%",
  },
  btnDetail: {
    alignSelf: "flex-end",
    width: "100%",
  },
};

export default AdminProduct;
