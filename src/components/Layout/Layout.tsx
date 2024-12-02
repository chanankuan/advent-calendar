import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ position: "relative", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
