import AuthContext from "../../contexts/auth-context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { userRegister } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    userRegister(email, password);
    navigate("/");
  };
  return (
    <div>
      <h1>Register</h1>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Register;
