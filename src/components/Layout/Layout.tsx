import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();
  const isAdvent = location.pathname.startsWith("/advent-calendar/");

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Advent Calendar - Homepage";
    }
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <main
        style={{
          position: "relative",
          flex: 1,
          paddingTop: !isAdvent ? "84px" : undefined,
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
