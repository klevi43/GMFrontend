import type { ItemType } from "../types/menuContextType";

interface Props {
  showMenu: (id: number, type: ItemType) => void;
  id: number;
  type: ItemType;
}
const ListItemOptionsButton = ({ showMenu, id, type }: Props) => {
  return (
    <button
      className=" text-text hover:text-white transition duration-150 cursor-pointer active:text-white"
      onClick={() => showMenu(id, type)}
    >
      <svg
        className="inline-block"
        width="2rem"
        height="2rem"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
    </button>
  );
};

export default ListItemOptionsButton;
