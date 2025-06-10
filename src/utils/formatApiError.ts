export function formatApiError(errorMsg: string) {
  if (
    errorMsg === "Network Error" ||
    errorMsg === "Request failed with status code 403"
  ) {
    return "An unexpected error occurred. Please try again later.";
  }

  return errorMsg;
}
