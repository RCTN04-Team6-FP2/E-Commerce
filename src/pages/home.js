import { useSelector } from "react-redux";
import AdminHome from "../components/AdminHome";
import UserHome from "../components/UserHome";

const Home = () => {
  const { products } = useSelector((state) => state.persistedReducer.products);

  if (localStorage.getItem("token") === "isAdmin") {
    return <AdminHome products={products} />;
  }

  return (
    <div>
      <UserHome products={products}/>
    </div>
  );
};

export default Home;
