import { ReactElement, useEffect } from "react";
import { Navigate } from "react-router-dom";
import httpClient from "../httpClient";
import Loader from "../components/Loader/Loader";
import { useAuthContext } from "../hooks";

interface PrivateRouteProps {
  component: ReactElement;
  redirectTo: string;
}

export function PrivateRoute({
  component: Component,
  redirectTo = "/",
}: PrivateRouteProps) {
  const { isLogged, isAuthLoading, setIsLogged } = useAuthContext();

  useEffect(() => {
    const revalidateSession = async () => {
      try {
        // Backend call to check session validity
        await httpClient.get("/auth/me");
        setIsLogged(true);
      } catch {
        setIsLogged(false);
      }
    };

    revalidateSession();
  }, [setIsLogged]);

  if (isAuthLoading) {
    return <Loader />;
  }

  return isLogged ? Component : <Navigate to={redirectTo} />;
}
