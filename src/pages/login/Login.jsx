import AuthContext from "../../contexts/auth-context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.scss";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      e.preventDefault();
      userLogin(email, password);
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="email">Enter email address or username</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-primary">
            Submit
          </button>
          <br />
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
