import { createContext } from "react";

type AuthContextType = {
  isLogged: boolean;
  username: string;
  isAuthLoading: boolean;
  setIsLogged: (value: boolean) => void;
  setUsername: (value: string) => void;
  setIsAuthLoading: (value: boolean) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
