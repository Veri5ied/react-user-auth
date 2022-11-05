import { LOGIN, REGISTER } from "../types";

const AuthReducer = (prevState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...prevState,
        user: payload,
      };
    case REGISTER:
      return {
        ...prevState,
        user: payload,
      };
    default:
      return prevState;
  }
};

export default AuthReducer;
