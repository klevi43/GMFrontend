interface Props {
  isPending: boolean;
  handleDeleteButtonClick: () => void;
}
const DeleteButton = ({ isPending, handleDeleteButtonClick }: Props) => {
  return (
    <>
      <button
        disabled={isPending}
        onClick={handleDeleteButtonClick}
        className="bg-primary text-[1.5rem] border-2 border-primary rounded-lg w-full py-2 transform-gpu will-change-transform hover:bg-red-500 hover:border-red-500 hover:text-white hover:cursor-pointer active:bg-modal active:text-red-500 active:border-2 active:border-red-500 active:scale-95  transition-all duration-180 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </>
  );
};

export default DeleteButton;
