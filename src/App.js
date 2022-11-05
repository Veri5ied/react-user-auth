import "./App.scss";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  NotFoundPage,
  SettingsPage,
  SupportPage,
  DashboardPage,
} from "./pages";
import AuthLayout from "./layout/AuthLayout";
import ProtectedRoute from "./PrivateRoutes";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
