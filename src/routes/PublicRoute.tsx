import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { useAuthContext } from "../hooks";

interface PublicRouteProps {
  component: ReactElement;
  redirectTo: string;
}

export function PublicRoute({
  component: Component,
  redirectTo = "/",
}: PublicRouteProps) {
  const { isLogged, isAuthLoading } = useAuthContext();

  if (isAuthLoading) {
    return <Loader />;
  }

  return isLogged ? <Navigate to={redirectTo} /> : Component;
}
