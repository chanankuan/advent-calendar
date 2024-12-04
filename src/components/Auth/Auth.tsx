import "./Auth.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import httpClient from "../../httpClient";

interface FormData {
  name: string;
  username: string;
  password: string;
}

function Auth() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (location.pathname === "/login") {
      try {
        const data = {
          username: formData.username,
          password: formData.password,
        };

        await httpClient.post("/auth/login", data);
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message =
            error.response?.data.error || "An unexpected error occurred.";
          setErrorMessage(message);
        }
      }
    } else if (location.pathname === "/register") {
      await httpClient.post("/auth/register", formData);
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

          {errorMessage && <p className="error-message">{errorMessage}</p>}

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
