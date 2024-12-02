import "./Auth.scss";

import { Link, useLocation } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import dotenvConfig from "../../dotenvConfig";

interface FormData {
  name: string;
  username: string;
  password: string;
}

function Auth() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    password: "",
  });
  const location = useLocation();

  const { BACKEND_URL } = dotenvConfig;

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (location.pathname === "/login") {
      const data = { username: formData.username, password: formData.password };

      await axios.post(`${BACKEND_URL}/auth/login`, data);
    } else if (location.pathname === "/register") {
      await axios.post(`${BACKEND_URL}/auth/register`, formData);
    }
  }

  return (
    <div>
      <Calendar />
      <div className="auth-backdrop">
        <form className="form" onSubmit={handleOnSubmit}>
          {location.pathname === "/register" && (
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleOnChange}
              required
            />
          )}
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleOnChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleOnChange}
            required
          />
          <button type="submit">
            {location.pathname === "/login" ? "Login" : "Register"}
          </button>

          {location.pathname === "/login" ? (
            <Link className="link" to="/register">
              Register
            </Link>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

export default Auth;
