import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import dotenvConfig from "../../dotenvConfig";
import httpClient from "../../httpClient";

import "./Calendar.css";
import Snowfall from "react-snowfall";
import Moon from "../Moon/Moon";
import Stars from "../Stars/Stars";
import Village from "../Village/Village";
import Switcher from "../Switcher/Switcher";
import Clouds from "../Clouds/Clouds";
import Blur from "../Blur/Blur";
import Modal from "../Modal/Modal";
import { ICalendar } from "../../types/types";
import Lights from "../Lights/Lights";

const adventCalendarResponses = [
  "Oops, no peeking! That date isn't ready yet—it's a surprise for later!",
  "Ah, you're getting ahead of yourself! This calendar works best when we follow the days in order.",
  "Shh! The magic happens when we get to that day.",
  "Patience! Each day brings its own little joy.",
];

function Calendar() {
  const [calendar, setCalendar] = useState<ICalendar | null>(null);
  const [snowEnabled, setSnowEnabled] = useState(false);
  const [lightsEnabled, setLightsEnabled] = useState(false);
  const [moonEnabled, setMoonEnabled] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const navigate = useNavigate();

  const { BACKEND_URL } = dotenvConfig;
  const params = useParams();

  async function handleOnHouseClick(id: number) {
    if (!calendar) return;

    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const currentNote = calendar.notes.find((note) => note.day === id);

    // Ensure user cannot open future notes
    if (id > dayOfMonth) {
      setActiveNote(adventCalendarResponses[Math.floor(Math.random() * 4)]);
      setIsModalActive(true);

      return;
    } else if (currentNote?.opened_at) {
      // If the note user tries to open was already opened do not send request
      setActiveNote(currentNote.description);
      setIsModalActive(true);
      return;
    }

    const token = params.access_token;

    if (token) {
      try {
        const response = await httpClient.post(
          `/calendars/${token}/notes/${id}`
        );

        setActiveNote(response.data.description);
        setIsModalActive(true);

        setCalendar((prevCalendar) => {
          if (!prevCalendar) return null; // Handle null case for safety

          const updatedNotes = prevCalendar.notes.map(
            (note) =>
              note.day === id
                ? {
                    ...note, // Copy existing note properties
                    opened_at: response.data.opened_at, // Update the opened_at timestamp
                  }
                : note // Keep other notes unchanged
          );

          return {
            ...prevCalendar,
            notes: updatedNotes, // Replace notes with the updated ones
          };
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleCloseModal() {
    // setHouseId(null);
    setActiveNote(null);
    setIsModalActive(false);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await httpClient.get(
          `${BACKEND_URL}/calendars/${token}`
        );

        if (response.data === "Not found") {
          navigate("/not-found", { replace: true });
          return;
        }

        setCalendar(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    const token = params.access_token;
    if (token) {
      fetchData();
    }
  }, [BACKEND_URL, params.access_token, navigate]);

  return (
    <div className="canvas-backdrop">
      <div className="canvas">
        {/* 4th plan */}
        <div className="fourth-plan"></div>

        <Clouds />

        {/* 3rd plan */}
        <Village notes={calendar?.notes} onHouseClick={handleOnHouseClick} />

        {/* 2nd plan */}
        <div className="second-plan"></div>

        {/* 1st plan */}
        <div className="first-plan"></div>

        <Stars />
        <Moon moonEnabled={moonEnabled} />
        <Lights lightsEnabled={lightsEnabled} />
        <Blur />

        <Switcher
          snowEnabled={snowEnabled}
          lightsEnabled={lightsEnabled}
          moonEnabled={moonEnabled}
          setSnowEnabled={setSnowEnabled}
          setLightsEnabled={setLightsEnabled}
          setMoonEnabled={setMoonEnabled}
        />

        {snowEnabled && <Snowfall />}
      </div>

      <div className="canvas-bg"></div>

      {isModalActive && (
        <Modal onCloseModal={handleCloseModal}>{activeNote}</Modal>
      )}
    </div>
  );
}

export default Calendar;
