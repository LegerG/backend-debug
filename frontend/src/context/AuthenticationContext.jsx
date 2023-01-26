import { createContext, useEffect, useState, useMemo } from "react";

export const authContext = createContext();

export function AuthenticationContextProvider({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const tryLogin = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    if (currentToken) {
      setToken(token);
    } else {
      tryLogin();
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      token,
      setToken,
      logout,
      tryLogin,
    }),
    [user, setUser, token, setToken, logout, tryLogin]
  );

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
}
