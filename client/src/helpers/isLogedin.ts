export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token; // true if exists, false if not
};