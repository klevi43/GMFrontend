import React from "react";
interface Props {
  closeModal: () => void;
}
const ModalCloseButton = ({ closeModal }: Props) => {
  return (
    <>
      <div className="absolute -top-5 right-0">
        <button
          onClick={closeModal}
          className="text-[1.4rem]  text-end  text-text hover:text-white transition-all duration-300 cursor-pointer"
        >
          X
        </button>
      </div>
    </>
  );
};

export default ModalCloseButton;
