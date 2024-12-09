import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import Calendar from "./components/Calendar/Calendar";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
// import Auth from "./components/Auth/Auth";
// import CreateCalendar from "./components/CreateCalendar/CreateCalendar";
// import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import httpClient from "./httpClient";

const Auth = lazy(() => import("./components/Auth/Auth"));
const CreateCalendar = lazy(
  () => import("./components/CreateCalendar/CreateCalendar")
);
const Layout = lazy(() => import("./components/Layout/Layout"));

function App() {
  useEffect(() => {
    async function fetchMe() {
      try {
        const response = await httpClient.get("/auth/me");
        localStorage.setItem("username", response.data.username);
      } catch {
        localStorage.removeItem("username");
      }
    }

    fetchMe();
  }, []);

  return (
    <Suspense fallback={<Loader size={20} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Calendar />} />
          <Route
            path="login"
            element={
              <PublicRoute component={<Auth />} redirectTo="/advent-calendar" />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute component={<Auth />} redirectTo="/advent-calendar" />
            }
          />
          {/* <Route path="login" element={<Auth />} /> */}
          <Route
            path="advent-calendar"
            element={
              <PrivateRoute
                component={<CreateCalendar />}
                redirectTo="/login"
              />
            }
          />
          <Route path="/advent-calendar/:access_token" element={<Calendar />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
