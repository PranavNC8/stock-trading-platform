export const saveTokenFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("token", token);

    // remove token from URL
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    );
  }
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href =
    "https://YOUR_FRONTEND_VERCEL_URL/login";
};
