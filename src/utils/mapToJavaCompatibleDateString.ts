export const mapToJavaCompatibleDateString = (date: Date) => {
  return date.toISOString().split("T")[0];
};
