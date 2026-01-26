import { useEffect, useState } from "react";
import { checkAuth } from "../utils/auth";
import Home from "./Home";

function ProtectedDashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verify = async () => {
      const userData = await checkAuth();

      if (!userData) {
        window.location.href = "http://localhost:3000/login";
        return;
      }

      setUser(userData);
      setLoading(false);
    };

    verify();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "40px", fontSize: "16px" }}>
        Checking authentication...
      </div>
    );
  }

  return <Home user={user} />;
}

export default ProtectedDashboard;
