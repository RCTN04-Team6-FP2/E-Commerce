import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "../utils/styles/login.css"

const Login = () => {
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.persistedReducer.users);

  const adminUser = {
    email: "admin@bukapedia.com",
    password: "admin123",
  };

  const [error, setError] = useState("");

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
      setError("Email atau Password salah.");
    }
  };

  return (
    <div className="Login">
      <LoginForm Login={Login} error={error} />
    </div>
  );
};

export default Login;
