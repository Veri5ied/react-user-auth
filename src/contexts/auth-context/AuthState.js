import { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

const AuthState = ({ children }) => {
  const initialState = {
    user: localStorage.getItem("user") || null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const userLogin = (email, password) => {
    dispatch({
      type: "LOGIN",
      payload: {
        email,
        password,
      },
    });
    localStorage.setItem("user", JSON.stringify({ email, password }));
  };

  const userRegister = (email, password) => {
    dispatch({
      type: "REGISTER",
      payload: {
        email,
        password,
      },
    });
    localStorage.setItem("user", JSON.stringify({ email, password }));
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        userLogin,
        userRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
