import { Navigate, Route, Routes } from "react-router";
import Calendar from "./components/Calendar/Calendar";
import Auth from "./components/Auth/Auth";
import { PrivateRoute } from "./routes/PrivateRoute";
import CreateCalendar from "./components/CreateCalendar/CreateCalendar";
import Layout from "./components/Layout/Layout";
import { PublicRoute } from "./routes/PublicRoute";

function App() {
  return (
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
            <PrivateRoute component={<CreateCalendar />} redirectTo="/login" />
          }
        />
        <Route path="/advent-calendar/:access_token" element={<Calendar />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
