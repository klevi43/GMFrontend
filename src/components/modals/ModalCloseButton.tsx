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
            : "text-[1.4rem]  text-end  text-text hover:text-white transition-all duration-150 cursor-pointer transform-gpu will-change-transform active:text-white active:scale-95"
        }
      >
        {content}
      </button>
    </>
  );
};

export default ModalCloseButton;
