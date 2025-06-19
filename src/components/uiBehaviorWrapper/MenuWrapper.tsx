import React from "react";
import { useMenu } from "../../hooks/useMenu";
import ListItemMenuModal from "../ListItemMenuModal";

import { useMod } from "../../hooks/useMod";
import type { DtoTypes, ModType } from "../../types/modContextType";

interface Props {
  modalType: ModType;
  initialData: DtoTypes;
}
const MenuWrapper = React.memo(({ modalType, initialData }: Props) => {
  const { openMenuId, showOpenMenu } = useMenu();
  const { openModal } = useMod();

  const handleOpenUpdateModalClick = () => {
    showOpenMenu(-1, undefined);
    openModal(modalType, initialData);
  };

  const handleOpenDeleteModalClick = () => {
    showOpenMenu(-1, undefined);
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
      {/* <ListItemOptionsButton showMenu={showOpenMenuById} id={initialData.id} /> */}
    </>
  );
});
export default MenuWrapper;
