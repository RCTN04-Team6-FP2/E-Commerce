import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminHome from "../components/AdminHome";
import UserHome from "../components/UserHome";
import { fetchProducts } from "../features/products/productsSlice";
import { fetchUsers } from "../features/users/usersSlice";

const Home = ({ products }) => {
  const dispatch = useDispatch();

  const doFetchProductsAndUsers = () => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  };

  useEffect(() => {
    doFetchProductsAndUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (localStorage.getItem("token") === "isAdmin") {
    return <AdminHome products={products} />;
  }

  return <UserHome />;
};

export default Home;
