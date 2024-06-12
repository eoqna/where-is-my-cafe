import { useCallback } from "react";

const useAccount = () => {
  const logout = useCallback(() => {
    
  }, []);

  return {
    logout,
  }
};

export default useAccount;