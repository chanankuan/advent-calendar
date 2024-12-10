import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import Calendar from "./components/Calendar/Calendar";
import { PrivateRoute, PublicRoute } from "./routes";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";

const Auth = lazy(() => import("./components/Auth/Auth"));
const CreateCalendar = lazy(
  () => import("./components/CreateCalendar/CreateCalendar")
);
const Layout = lazy(() => import("./components/Layout/Layout"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader size={20} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Calendar />} />
            <Route
              path="login"
              element={
                <PublicRoute
                  component={<Auth />}
                  redirectTo="/advent-calendar"
                />
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute
                  component={<Auth />}
                  redirectTo="/advent-calendar"
                />
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
            <Route
              path="/advent-calendar/:access_token"
              element={<Calendar />}
            />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
