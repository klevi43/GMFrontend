import React from "react";

interface Props {
  message: string;
  fontSize: string;
}
const ErrorMessage = ({ message, fontSize }: Props) => {
  return (
    <>
      <p className={`text-red-500 text-${fontSize} text-center`}>{message}</p>
    </>
  );
};

export default ErrorMessage;
