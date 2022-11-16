import LoginForm from "../components/LoginForm";
import { useLogin } from "../hooks/Login.hook";
import "../utils/styles/login.css"

const Login = () => {
  const { Login, error } = useLogin();

  return (
    <div className="Login">
      <LoginForm Login={Login} error={error} />
    </div>
  );
};

export default Login;
