import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";

const UserHome = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Outlet />
    </div>
  );
};

export default UserHome;
