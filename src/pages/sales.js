import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Navbar from "../components/Navbar";
import nothingHere from "../utils/imgs/nothing-here.svg";
import HandleNothing from "../components/HandleNothing";
import SalesDetail from "../components/SalesDetail";
import SalesFooter from "../components/SalesFooter";

const Sales = () => {
  const { products } = useSelector((state) => state.persistedReducer.products);
  const soldProducts = products.filter((product) => product.sold > 0);

  if (!soldProducts.length) {
    return (
      <div>
        <Navbar />
        <HandleNothing img={nothingHere} />
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
              return <SalesDetail sale={sale} key={sale.id} />;
            })}
            <SalesFooter soldProducts={soldProducts} />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Sales;
