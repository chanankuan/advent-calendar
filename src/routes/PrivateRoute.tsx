import { ReactElement, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import httpClient from "../httpClient";

interface PrivateRouteProps {
  component: ReactElement;
  redirectTo: string;
}

export function PrivateRoute({
  component: Component,
  redirectTo = "/",
}: PrivateRouteProps) {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMe() {
      try {
        await httpClient.get("/auth/me");
        setIsLoading(false);
      } catch {
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMe();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? Component : <Navigate to={redirectTo} />;
}
