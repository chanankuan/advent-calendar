import "./Header.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dotenvConfig from "../../dotenvConfig";

const { BACKEND_URL } = dotenvConfig;

function Header() {
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchMe() {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/me`);
        setUsername(response.data.username);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMe();
  }, []);

  async function handleLogout() {
    try {
      await axios.post(`${BACKEND_URL}/auth/logout`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Advent Calendar</h1>
        <nav className="nav">
          {username ? (
            <Link to="/advent-calendar" className="nav-link">
              Create your calendar
            </Link>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          )}

          {username && (
            <div className="user-dropdown">
              <button
                className="username-button"
                onClick={() =>
                  setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen)
                }
              >
                {username}
              </button>
              {isModalOpen && (
                <div className="header-modal">
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
