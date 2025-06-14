import React from "react";
interface Props {
  closeModal: () => void;
  styles?: string;
  content: string;
}
const ModalCloseButton = ({ closeModal, styles, content }: Props) => {
  return (
    <>
      <button
        onClick={closeModal}
        className={
          styles
            ? styles
            : "text-[1.4rem]  text-end  text-text hover:text-white transition-all duration-300 cursor-pointer"
        }
      >
        {content}
      </button>
    </>
  );
};

export default ModalCloseButton;
