import "./Auth.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Calendar from "../Calendar/Calendar";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import httpClient from "../../httpClient";
import { useAuthContext } from "../../hooks";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  username: string;
  password: string;
}

const initialFormData: FormData = {
  name: "",
  username: "",
  password: "",
};

function Auth() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLogged, setUsername } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (location.pathname === "/login") {
      setFormData(initialFormData);

      try {
        const data = {
          username: formData.username,
          password: formData.password,
        };

        await httpClient.post("/auth/login", data);
        toast.success("You are successfully logged in.");
        setIsLogged(true);
        setUsername(data.username);
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message =
            error.response?.data.error || "An unexpected error occurred.";
          setErrorMessage(message);
        }
      } finally {
        setIsLoading(false);
      }
    } else if (location.pathname === "/register") {
      setFormData(initialFormData);

      try {
        await httpClient.post("/auth/register", formData);
        toast.success("You are successfully registered.");
        navigate("/login");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message =
            error.response?.data.error || "An unexpected error occurred.";
          setErrorMessage(message);
          setFormData(initialFormData);
        }
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    if (location.pathname.startsWith("/login")) {
      document.title = "Advent Calendar - Login";
    } else if (location.pathname.startsWith("/register")) {
      document.title = "Advent Calendar - Register";
    }
  }, [location.pathname]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
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
            autoComplete="None"
            placeholder="password"
            value={formData.password}
            onChange={handleOnChange}
            required
          />
          <button type="submit">
            {!isLoading && (
              <>{location.pathname === "/login" ? "Login" : "Register"}</>
            )}

            {isLoading && <BeatLoader color="#ffffff" size={10} />}
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
