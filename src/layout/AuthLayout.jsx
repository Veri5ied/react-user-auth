import { Outlet } from "react-router-dom";
import TopNavigation from "../ui/top-navigation/TopNavigation";
const AuthLayout = () => {
  return (
    <div>
      <TopNavigation />
      <>
        <Outlet />
      </>
    </div>
  );
};

export default AuthLayout;
