import { ChangeEvent, FormEvent, useState } from "react";
import axios, { AxiosResponse } from "axios";
import dotenvConfig from "../../dotenvConfig";
import "./CreateCalendar.scss";
import { ICalendar, INote } from "../../types/types";

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

  const { BACKEND_URL } = dotenvConfig;

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
      const response: AxiosResponse<ICalendar> = await axios.post(
        `${BACKEND_URL}/calendar`,
        formData
      );
      const calendar = response.data;

      const url = `http://localhost:5173/advent-calendar/${calendar.access_token}`;
    } catch (error) {}
  }

  return (
    <div className="backdrop calendar-backdrop">
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
                id={`day-${1}`}
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
    </div>
  );
}

export default CreateCalendar;
