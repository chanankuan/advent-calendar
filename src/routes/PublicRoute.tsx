import { ReactElement, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import httpClient from "../httpClient";
import Loader from "../components/Loader/Loader";

interface PublicRouteProps {
  component: ReactElement;
  redirectTo: string;
}

export function PublicRoute({
  component: Component,
  redirectTo = "/",
}: PublicRouteProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMe() {
      try {
        await httpClient.get("/auth/me");

        setIsAuthorized(true);
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
    return <Loader />;
  }

  return isAuthorized ? <Navigate to={redirectTo} /> : Component;
}
