import React from "react";
interface Props {
  styles?: string;
  content: string;
  showElement: () => void;
}

const ShowElementButton = ({ styles, content, showElement }: Props) => {
  return (
    <>
      <button
        className={`text-text ${styles} hover:text-white transition-all duration-300 cursor-pointer`}
        onClick={showElement}
      >
        {content}
      </button>
    </>
  );
};

export default ShowElementButton;
