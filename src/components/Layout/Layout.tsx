import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  const location = useLocation();
  const isAdvent = location.pathname.startsWith("/advent-calendar/");

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
