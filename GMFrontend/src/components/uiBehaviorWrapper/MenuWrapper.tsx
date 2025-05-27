import React from "react";
import { useMenu } from "../../hooks/useMenu";
import ListItemOptionsButton from "../workoutList/ListItemOptionsButton";

interface Props {
  id: number;
}
const MenuWrapper = React.memo(({ id }: Props) => {
  const { showOpenMenuById } = useMenu();
  return (
    <>
      {/* {openMenuId === workout.id && (
                <ListItemMenuModal
                  handleOpenUpdateModalClick={handleOpenUpdateModalClick}
                  handleOpenDeleteModalClick={handleOpenDeleteModalClick}
                />
              )} */}
      <ListItemOptionsButton showMenu={showOpenMenuById} id={id} />
    </>
  );
});
export default MenuWrapper;
