import { toast } from "react-toastify";
import axios from "axios";

export function handleAxiosError(
  error: unknown,
  fallbackMessage = "An unexpected error occurred."
) {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.error || fallbackMessage;

    toast.error(message, {
      position: "top-right",
    });
  } else {
    toast.error(fallbackMessage, {
      position: "top-right",
    });
  }
}
