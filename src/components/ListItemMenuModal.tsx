interface Props {
  styles?: string;
  updateOptionText?: string;
  deleteOptionText?: string;
  handleOpenUpdateModalClick: () => void;
  handleOpenDeleteModalClick: () => void;
}
const ListItemMenuModal = ({
  styles,
  updateOptionText,
  deleteOptionText,
  handleOpenUpdateModalClick,
  handleOpenDeleteModalClick,
}: Props) => {
  return (
    <>
      <div className="absolute top-1/2 right-full -translate-y-1/2 mr-2 w-55 bg-modal border border-modal-outline rounded-lg z-10">
        {/* Tail */}
        <div className="absolute top-1/2 left-full -translate-y-1/2 -ml-2 w-4 h-4 bg-modal border-l border-modal-outline transform rotate-135 z-0"></div>

        {/* Menu Items */}
        <ul className="relative z-10 p-3 space-y-2 ">
          <li>
            <button
              onClick={handleOpenUpdateModalClick}
              className="text-text hover:text-white transition-all duration-300 cursor-pointer active:scale-95 active:text-white"
            >
              {updateOptionText ? updateOptionText : "Edit"}
            </button>
          </li>
          <li>
            <button
              onClick={handleOpenDeleteModalClick}
              className="text-text hover:text-red-500 transition-all duration-300 cursor-pointer active:scale-95 active:text-red-500"
            >
              {deleteOptionText ? deleteOptionText : "Delete"}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListItemMenuModal;
