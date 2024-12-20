import "./Header.scss";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import httpClient from "../../httpClient";
import Modal from "../Modal/Modal";
import { ICalendar } from "../../types/types";
import { getCalendarUrl } from "../../helpers/getCalendarUrl";
import { handleAxiosError } from "../../helpers";
import { BeatLoader } from "react-spinners";
import { useAuthContext } from "../../hooks";

function Header() {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [calendars, setCalendars] = useState<ICalendar[]>([]);
  const { isLogged, setIsLogged, username, setUsername, isAuthLoading } =
    useAuthContext();

  const location = useLocation();
  const navigate = useNavigate();

  async function handleOpenViewModal() {
    try {
      const response = await httpClient.get("/calendars");
      setCalendars(response.data);
      setIsViewModalOpen(true);
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async function handleLogout() {
    setIsLoading(true);
    try {
      await httpClient.post("/auth/logout");
      setIsLogged(false);
      setUsername("");
      setIsUserModalOpen(false);
      navigate("/login");
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <header
      className="header"
      style={{
        display: location.pathname.startsWith("/advent-calendar/")
          ? "none"
          : undefined,
      }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          Advent Calendar
        </Link>
        <nav className="nav">
          {!isAuthLoading && (
            <>
              {isLogged ? (
                <>
                  <button className="nav-link" onClick={handleOpenViewModal}>
                    View my calendars
                  </button>
                  <Link to="/advent-calendar" className="nav-link">
                    Create your calendar
                  </Link>
                </>
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
            </>
          )}

          {username && (
            <div className="user-dropdown">
              <button
                className="username-button"
                onClick={() =>
                  setIsUserModalOpen((prevIsModalOpen) => !prevIsModalOpen)
                }
              >
                {username}
              </button>
              {isUserModalOpen && (
                <div className="header-modal">
                  <button onClick={handleLogout} className="logout-button">
                    {isLoading ? (
                      <BeatLoader color="#563dc7" size={10} />
                    ) : (
                      "Logout"
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>

      {isViewModalOpen && (
        <Modal onCloseModal={() => setIsViewModalOpen(false)}>
          {calendars.length === 0 ? (
            <p>
              🎄 No calendars yet! 🎅{" "}
              <Link
                to="/advent-calendar"
                onClick={() => setIsViewModalOpen(false)}
              >
                Click here to create one and spread the holiday cheer!
              </Link>{" "}
              🎁
            </p>
          ) : (
            <table className="view-calendar-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {calendars.map(({ title, access_token }) => (
                  <tr key={access_token}>
                    <td>{title}</td>
                    <td>
                      <a
                        href={getCalendarUrl(access_token)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          width={60}
                          height={60}
                          src="/src/assets/advent-icon.svg"
                          alt="Advent calendar icon"
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Modal>
      )}
    </header>
  );
}

export default Header;
