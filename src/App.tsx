import { Navigate, Route, Routes } from "react-router";
import Calendar from "./components/Calendar/Calendar";
import Auth from "./components/Auth/Auth";
import { PrivateRoute } from "./routes/PrivateRoute";
import CreateCalendar from "./components/CreateCalendar/CreateCalendar";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Calendar />} />
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="advent-calendar">
          <Route
            index
            element={
              <PrivateRoute
                component={<CreateCalendar />}
                redirectTo="/login"
              />
            }
          ></Route>
          <Route path="/advent-calendar/:access_token" element={<Calendar />} />
        </Route>
        <Route path="/not-found" element={<Calendar />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
