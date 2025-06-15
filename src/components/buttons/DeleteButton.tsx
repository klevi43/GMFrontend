import { useMod } from "../../hooks/useMod";

interface Props {
  isSuccess: boolean;
  isPending: boolean;
  handleDeleteButtonClick: () => void;
}
const DeleteButton = ({
  isSuccess,
  isPending,
  handleDeleteButtonClick,
}: Props) => {
  const { closeModal } = useMod();
  return (
    <>
      {!isSuccess && (
        <button
          disabled={isPending}
          onClick={handleDeleteButtonClick}
          className="bg-primary text-[1.5rem] rounded-lg w-full py-2 hover:bg-red-500 hover:text-white hover:cursor-pointer active:bg-modal active:text-red-500 active:border-2 active:border-red-500 active:scale-95  transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      )}
      {isSuccess && (
        <button
          onClick={closeModal}
          className="bg-primary text-[1.5rem] rounded-lg w-full py-2 hover:scale-102 hover:cursor-pointer transition-all duration-300 active:bg-modal active:text-primary active:border-2 active:border:primary"
        >
          Close
        </button>
      )}
    </>
  );
};

export default DeleteButton;
