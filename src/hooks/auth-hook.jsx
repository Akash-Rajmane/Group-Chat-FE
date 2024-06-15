import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";


let logoutTimer;
const useAuth = () => {
  const [token, setToken] = useState(null);
  const [tokenExpiration, setTokenExpiration] = useState(null);
  const [userId,setUserId] = useState(null);
  const navigate = useNavigate();
  

  const login = useCallback((token, tokenExpirationDate, userId) => {
    setToken(token);
    setUserId(userId);
    
    tokenExpirationDate = tokenExpirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    
    setTokenExpiration(tokenExpirationDate);
    
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId,
        token,
        tokenExpiration: tokenExpirationDate,
      })
    );

    navigate("/");
    
  }, [navigate]);

  const logout = useCallback(() => {
    setUserId(null);
    setToken(null);
    setTokenExpiration(null);
    localStorage.removeItem("userData");
    navigate("/sign-in");
  }, [navigate]);

  useEffect(() => {
    if (token && tokenExpiration) {
      const remainingTime = tokenExpiration.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpiration]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    // Check if there's stored data and if the token has not expired
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.tokenExpiration) > new Date()
    ) {
      login(
        storedData.token,
        new Date(storedData.tokenExpiration),
        storedData.userId
      );
    }
   
  }, [login]);
  

  return { token, login, logout, userId, tokenExpiration};
};

export default useAuth;