import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState("");
  const { users } = useSelector((state) => state.persistedReducer.users);
  const navigate = useNavigate();
  
  const adminUser = {
    email: "admin@bukapedia.com",
    password: "admin123",
  };

  console.log(users);

  const Login = (details) => {
    const isUser = users.find(
      (user) =>
        user.email === details.email && user.password === details.password
    );
    const isAdmin = adminUser.email === details.email && adminUser.password === details.password
    if (isUser) {
      console.log("Berhasil Login User");
      localStorage.setItem("token", "isUser");
      navigate("/home");
    } else if (isAdmin) {
      console.log("Berhasil Login Admin");
      localStorage.setItem("token", "isAdmin");
      navigate("/home");
    } 
    else {
      console.log("Tidak Berhasil Login");
      setError("Wrong Email or Password");
    }
  };

  return { error, Login };
};
