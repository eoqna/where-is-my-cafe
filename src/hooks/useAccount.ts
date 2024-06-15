import { useCallback } from "react";
import { removeCookie } from "../utils/cookie";
import useDataStore from "../store/useDataStore";

const useAccount = () => {
  const { isLogin } = useDataStore();

  const logout = useCallback(() => {
    isLogin(false);
    removeCookie("login", {path: "/"});
  }, []);

  return {
    logout,
  }
};

export default useAccount;