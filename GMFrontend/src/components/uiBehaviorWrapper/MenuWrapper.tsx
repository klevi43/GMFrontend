import React from "react";
import { useMenu } from "../../hooks/useMenu";
import ListItemOptionsButton from "../workoutList/ListItemOptionsButton";
import ListItemMenuModal from "../workoutList/ListItemMenuModal";

import { useMod } from "../../hooks/useMod";
import type { DtoTypes, ModType } from "../../types/modContextType";

interface Props {
  modalType: ModType;
  initialData: DtoTypes;
}
const MenuWrapper = React.memo(({ modalType, initialData }: Props) => {
  const { openMenuId, showOpenMenuById } = useMenu();
  const { openModal } = useMod();

  const handleOpenUpdateModalClick = () => {
    showOpenMenuById(-1);
    openModal(modalType, initialData);
  };

  const handleOpenDeleteModalClick = () => {
    showOpenMenuById(-1);
    openModal(modalType, initialData);
  };
  return (
    <>
      {openMenuId === initialData.id && (
        <ListItemMenuModal
          handleOpenUpdateModalClick={handleOpenUpdateModalClick}
          handleOpenDeleteModalClick={handleOpenDeleteModalClick}
        />
      )}
      <ListItemOptionsButton showMenu={showOpenMenuById} id={id} />
    </>
  );
});
export default MenuWrapper;
