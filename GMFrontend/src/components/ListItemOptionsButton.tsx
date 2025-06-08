import React from "react";
interface Props {
  showMenu: (id: number) => void;
  id: number;
}
const ListItemOptionsButton = ({ showMenu, id }: Props) => {
  console.log("ListItemOptionsButton: " + id);
  return (
    <button
      className=" text-text hover:text-white transition duration-300 cursor-pointer"
      onClick={() => showMenu(id)}
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
