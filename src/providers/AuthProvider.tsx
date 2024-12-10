import React, { useEffect, useState } from "react";
import { AuthContext } from "../context";
import httpClient from "../httpClient";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(true);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchMe() {
      setIsAuthLoading(true);
      try {
        const response = await httpClient.get("/auth/me");
        setUsername(response.data.username);
        setIsLogged(true);
      } catch {
        // localStorage.removeItem("username");
        setIsLogged(false);
      } finally {
        setIsAuthLoading(false);
      }
    }

    fetchMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        username,
        isAuthLoading,
        setIsLogged,
        setUsername,
        setIsAuthLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
