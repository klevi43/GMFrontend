import type { ReactNode } from "react";

interface Props {
  styles?: string;
  content: ReactNode;
  showElement: () => void;
}

const ShowElementButton = ({ styles, content, showElement }: Props) => {
  return (
    <>
      <button
        className={` ${styles}  transition-all duration-300 cursor-pointer`}
        onClick={showElement}
      >
        {content}
      </button>
    </>
  );
};

export default ShowElementButton;
