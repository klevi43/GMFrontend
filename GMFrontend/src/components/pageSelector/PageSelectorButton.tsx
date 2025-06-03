import React from "react";

interface Props {
  action: () => void;
  text: string;
}
const PageSelectorButton = ({ action, text }: Props) => {
  return (
    <>
      <span className="hover:text-primary transition-all duration-300">
        <button onClick={action} className="hover:cursor-pointer">
          {text}
        </button>
      </span>
    </>
  );
};

export default PageSelectorButton;
