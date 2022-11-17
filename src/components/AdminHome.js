import AdminProduct from "./AdminProduct";
import Navbar from "./Navbar";

const AdminHome = ({ products }) => {
  return (
    <div>
      <Navbar />
      <div className="container my-4 py-4">
        <div className="row">
          {products.map((product) => (
            <AdminProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
