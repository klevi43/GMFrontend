import { useModal } from "../../hooks/useModal";
interface Props {
  handleOpenUpdateModalClick: () => void;
  handleOpenDeleteModalClick: () => void;
}
const WorkoutListItemMenuModal = ({
  handleOpenUpdateModalClick,
  handleOpenDeleteModalClick,
}: Props) => {
  return (
    <>
      <div className="relative">
        <div className="absolute right-[4rem] w-48 bg-modal border border-modal-outline rounded-lg z-10">
          {/* Tail */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-modal border-l border-modal-outline transform rotate-135 z-0"></div>

          {/* Menu Items */}
          <ul className="relative z-10 p-3 space-y-2 ">
            <li>
              <button
                onClick={handleOpenUpdateModalClick}
                className="text-text hover:text-white transition-all duration-300 cursor-pointer"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={handleOpenDeleteModalClick}
                className="text-text hover:text-red-500 transition-all duration-300 cursor-pointer"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkoutListItemMenuModal;
