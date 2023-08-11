export const logout = () => {
  localStorage.removeItem("userToken");
  window.location.pathname = "/";
};
