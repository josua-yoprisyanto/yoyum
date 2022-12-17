export const getRole = () => {
  return localStorage.getItem("role") ? localStorage.getItem("role") : "";
};
