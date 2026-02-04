import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import Home from "./Home";

function ProtectedDashboard() {
  // 🔒 If token is NOT present, block access
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  // ✅ Token exists → allow dashboard
  return <Home />;
}

export default ProtectedDashboard;
