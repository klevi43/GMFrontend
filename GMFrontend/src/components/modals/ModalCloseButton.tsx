import React from "react";
interface Props {
  showForm: () => void;
}
const ModalCloseButton = ({ showForm }: Props) => {
  return (
    <>
      <div className="absolute -top-5 right-0">
        <button
          onClick={showForm}
          className="text-[1.4rem]  text-end  text-text hover:text-white transition-all duration-300 cursor-pointer"
        >
          X
        </button>
      </div>
    </>
  );
};

export default ModalCloseButton;
