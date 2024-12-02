import { ReactElement, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import dotenvConfig from "../dotenvConfig";
import type { IUser } from "../types/types";
import httpClient from "../httpClient";

// Set default `withCredentials` to true
axios.defaults.withCredentials = true;

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
      const { BACKEND_URL } = dotenvConfig;

      const response: AxiosResponse<IUser> = await httpClient.get(
        `${BACKEND_URL}/auth/me`,
        { withCredentials: true }
      );

      console.log("user", response.data);
    }

    try {
      fetchMe();
      setIsAuthorized(true);
      setIsLoading(false);
    } catch {
      console.log("Unauthorized");
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? <Navigate to={redirectTo} /> : Component;
}
