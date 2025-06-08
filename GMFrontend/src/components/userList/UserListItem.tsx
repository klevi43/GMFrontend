import React from "react";

import UserListItemDetails from "./UserListItemDetails";
import ListItemMenuModal from "../ListItemMenuModal";
import ListItemOptionsButton from "../ListItemOptionsButton";
import { useMenu } from "../../hooks/useMenu";
import type UserDto from "../../dtos/userDto";
import { useMod } from "../../hooks/useMod";
interface Props {
  userDto: UserDto;
}
const UserListItem = ({ userDto }: Props) => {
  const { openMenuId, showOpenMenuById } = useMenu();
  const { openModal } = useMod();
  const handleOpenUpdateModalClick = () => {
    showOpenMenuById(-1);
    openModal("ADMIN_PROMOTE_USER", userDto);
  };
  const handleOpenDeleteModalClick = () => {
    showOpenMenuById(-1);
    openModal("ADMIN_DELETE_USER", userDto);
  };
  return (
    <>
      <li className="w-[100%] pb-2 hover:pl-4 transition-all duration-300">
        <div className=" border-l-8 border-primary text-text my-full bg-background  transition-all duration-300  hover:text-primary">
          <div className="flex justify-between items-center">
            <UserListItemDetails userDto={userDto} />
            <div className="relative">
              {openMenuId === userDto.id && (
                <ListItemMenuModal
                  updateOptionText="Promote to Administrator"
                  deleteOptionText="Delete User"
                  handleOpenUpdateModalClick={handleOpenUpdateModalClick}
                  handleOpenDeleteModalClick={handleOpenDeleteModalClick}
                />
              )}
              <ListItemOptionsButton
                showMenu={showOpenMenuById}
                id={userDto.id}
              />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default UserListItem;
