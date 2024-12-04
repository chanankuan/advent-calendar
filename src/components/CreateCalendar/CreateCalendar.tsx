import "./CreateCalendar.scss";

import { ChangeEvent, FormEvent, useState } from "react";
import { AxiosResponse } from "axios";
import httpClient from "../../httpClient";
import { ICalendar, INote } from "../../types/types";
import Modal from "../Modal/Modal";
import { getCalendarUrl } from "../../helpers/getCalendarUrl";

interface FormData {
  title: string;
  notes: Pick<INote, "day" | "description">[];
}

const initialData: FormData = {
  title: "",
  notes: [
    { day: 1, description: "" },
    { day: 2, description: "" },
    { day: 3, description: "" },
    { day: 4, description: "" },
    { day: 5, description: "" },
    { day: 6, description: "" },
    { day: 7, description: "" },
    { day: 8, description: "" },
    { day: 9, description: "" },
    { day: 10, description: "" },
    { day: 11, description: "" },
    { day: 12, description: "" },
    { day: 13, description: "" },
    { day: 14, description: "" },
    { day: 15, description: "" },
    { day: 16, description: "" },
    { day: 17, description: "" },
    { day: 18, description: "" },
    { day: 19, description: "" },
    { day: 20, description: "" },
    { day: 21, description: "" },
    { day: 22, description: "" },
    { day: 23, description: "" },
    { day: 24, description: "" },
  ],
};

function CreateCalendar() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [calendarUrl, setCalendarUrl] = useState("");

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      if (name === "title") {
        return { ...prevFormData, [name]: value };
      } else {
        return {
          ...prevFormData,
          notes: prevFormData.notes.map((note) =>
            note.day === +name ? { day: +name, description: value } : note
          ),
        };
      }
    });
  }

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response: AxiosResponse<ICalendar> = await httpClient.post(
        "/calendar",
        formData
      );
      const calendar = response.data;

      setCalendarUrl(getCalendarUrl(calendar.access_token));
      console.log();
    } catch (error) {
      console.log(error);
    }
  }

  function handleOnCloseModal() {
    setCalendarUrl("");
  }

  return (
    <div className="calendar-backdrop">
      <form onSubmit={handleOnSubmit}>
        <h1 className="form-title">Create Your Advent Calendar</h1>
        <input
          type="text"
          name="title"
          placeholder="Calendar title"
          value={formData.title}
          onChange={handleOnChange}
          required
        />

        {Array.from({ length: 24 }, (_, i) => i).map((i) => {
          const id = i + 1;

          return (
            <div key={i}>
              <label htmlFor={`day-${id}`}>Day {id}</label>
              <input
                type="text"
                name={`${id}`}
                id={`day-${id}`}
                placeholder="Your wish"
                value={formData.notes[i]?.description ?? ""}
                onChange={handleOnChange}
              />
            </div>
          );
        })}

        <button type="submit" className="submit-button">
          Submit Calendar
        </button>
      </form>

      {calendarUrl && (
        <Modal onCloseModal={handleOnCloseModal}>
          <h2 style={{ fontFamily: "Brandon Grotesque", fontSize: 48 }}>
            You just created your Advent Calendar
          </h2>
          <p style={{ fontFamily: "Brandon Grotesque" }}>
            Follow this{" "}
            <a style={{ color: "#412e9e" }} href={calendarUrl} target="_blank">
              link
            </a>{" "}
            to open
          </p>
        </Modal>
      )}
    </div>
  );
}

export default CreateCalendar;
