export const checkAuth = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/auth/me", {
      method: "GET",
      credentials: "include", // 🔴 VERY IMPORTANT
    });

    if (!res.ok) {
      throw new Error("Not authenticated");
    }

    return await res.json();
  } catch (err) {
    return null;
  }
};
