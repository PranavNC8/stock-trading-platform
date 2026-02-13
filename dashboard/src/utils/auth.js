// ==============================
// SAVE TOKEN FROM URL (once)
// ==============================
export const saveTokenFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("token", token);

    // Remove token from URL after saving
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    );
  }
};

// ==============================
// GET TOKEN
// ==============================
export const getToken = () => {
  return localStorage.getItem("token");
};

// ==============================
// CHECK AUTHENTICATION
// ==============================
export const isAuthenticated = () => {
  return !!getToken();
};

// ==============================
// LOGOUT
// ==============================
export const logout = () => {
  localStorage.removeItem("token");

  // redirect to deployed frontend login page
  window.location.href =
    process.env.REACT_APP_FRONTEND_URL + "/login";
};
