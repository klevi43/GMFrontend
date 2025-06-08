import axios from "axios";

export function formatApiError(errorMsg: string) {
  if (errorMsg === "Network Error") {
    return "An unexpected error occured. Please try again later.";
  }
  return errorMsg;
}
