import React from "react";
interface Props {
  message: string;
  fontSize: string;
}
const InfoMessage = ({ message, fontSize }: Props) => {
  return (
    <>
      <p className={`text-text text-${fontSize} text-center`}>{message}</p>
    </>
  );
};

export default InfoMessage;
