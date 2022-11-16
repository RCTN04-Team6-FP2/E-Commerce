import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Navbar from "../components/Navbar";
import nothingHere from "../utils/imgs/nothing-here.svg";

const Sales = () => {
  const { products } = useSelector((state) => state.persistedReducer.products);
  const soldProducts = products.filter((product) => product.sold > 0);

  const total = soldProducts.reduce(
    (prev, current) => prev + current.sold * current.price,
    0
  );

  if (soldProducts.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="d-flex flex-column align-items-center">
          <img src={nothingHere} alt="" height="40%" width="40%" />
          <h1>Nothing Here ..</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="m-5 bg-white">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Product</th>
              <th>Harga</th>
              <th>Terjual</th>
              <th>Pendapatan</th>
            </tr>
          </thead>
          <tbody>
            {soldProducts.map((sale) => {
              return (
                <tr key={sale.id}>
                  <td>{sale.title}</td>
                  <td>${sale.price}</td>
                  <td>{sale.sold}</td>
                  <td>${(sale.price * sale.sold).toFixed(2)}</td>
                </tr>
              );
            })}
            <tr style={{ backgroundColor: "black" }}>
              <td colSpan={3}>
                <div style={{ float: "right", color: "white" }}>Total</div>
              </td>
              <td style={{ color: "white" }}>${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Sales;
