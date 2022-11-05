import "./style.scss";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../contexts/auth-context/AuthContext";

const TopNavigation = () => {
  const { user } = useContext(AuthContext);

  const userLogout = () => {
    localStorage.removeItem("user");
    window.location.replace("/");
  };
  return (
    <div className="top_navigation">
      <div className="top_navigation_right">
        <p>CeeCee</p>
      </div>
      <div className="top-navigation-left">
        <NavLink to="/" exact>
          Home
        </NavLink>
        {!user && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/support">Support</NavLink>
            <button onClick={userLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavigation;
