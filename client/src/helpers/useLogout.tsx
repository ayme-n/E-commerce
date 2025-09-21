import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  return () => {
    googleLogout();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/login");
  };
}
