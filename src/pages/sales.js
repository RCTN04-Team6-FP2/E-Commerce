import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Navbar from "../components/Navbar";

const Sales = () => {
  const { products } = useSelector((state) => state.persistedReducer.products);
  const soldProducts = products.filter((product) => product.sold > 0)

  return (
    <div>
      <Navbar />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {soldProducts.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>{sale.title}</td>
                <td>{sale.price}</td>
                <td>{sale.sold}</td>
                <td>{(sale.price * sale.sold).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Sales;
