import "./style.scss";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>E dey carry me go where I no know ooo...</h1>
      <NavLink to="/">Go Back</NavLink>
    </div>
  );
};

export default NotFound;
