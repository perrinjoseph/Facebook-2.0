import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function useVerifyAuth() {
  const history = useHistory();
  useEffect(() => {
    const isAuth = localStorage.getItem("jwt_token")?.split(" ")[1];
    isAuth ? history.push("/home") : history.push(history.location.pathname);
  }, []);
  return null;
}

export default useVerifyAuth;
