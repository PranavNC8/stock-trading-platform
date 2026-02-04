import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://stock-backend-1feb.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Login failed");
        return;
      }

      // ✅ REDIRECT TO DASHBOARD WITH TOKEN
      window.location.href = `https://stock-trading-platform-s9lt.vercel.app/?token=${data.token}`;
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-normal">Login to your account</h1>
        <p className="text-muted fs-5 mt-3">
          Track your portfolio and trade seamlessly
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card border-0 shadow-sm p-4">
            <h5 className="text-center mb-4 fw-normal">Welcome back</h5>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                className="btn btn-primary btn-lg w-100"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {error && (
              <p className="text-danger text-center mt-3">{error}</p>
            )}

            <p className="text-center mt-3 mb-0 text-muted">
              Don’t have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
