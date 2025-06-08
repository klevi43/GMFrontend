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
  const handleOpenPromoteToAdminModalClick = () => {
    showOpenMenuById(-1);
    openModal("ADMIN_PROMOTE_USER", userDto);
  };

  const handleOpenDemoteToUserModalClick = () => {
    showOpenMenuById(-1);
    openModal("ADMIN_DEMOTE_ADMIN", userDto);
  };
  const handleOpenDeleteModalClick = () => {
    showOpenMenuById(-1);
    openModal("ADMIN_DELETE_USER", userDto);
  };

  console.log(openMenuId);
  console.log(userDto);
  console.log(openMenuId === userDto.id && userDto.role === "ROLE_USER");
  return (
    <>
      <li className="w-[100%] pb-2 hover:pl-4 transition-all duration-300">
        <div className=" border-l-8 border-primary text-text my-full bg-background  transition-all duration-300  hover:text-primary">
          <div className="flex justify-between items-center">
            <UserListItemDetails userDto={userDto} />
            <div className="relative">
              {openMenuId === userDto.id && userDto.role === "ROLE_USER" && (
                <ListItemMenuModal
                  updateOptionText="Promote to Administrator"
                  deleteOptionText="Delete User"
                  handleOpenUpdateModalClick={
                    handleOpenPromoteToAdminModalClick
                  }
                  handleOpenDeleteModalClick={handleOpenDeleteModalClick}
                />
              )}
              {openMenuId === userDto.id && userDto.role === "ROLE_ADMIN" && (
                <ListItemMenuModal
                  updateOptionText="Demote to User"
                  deleteOptionText="Delete User"
                  handleOpenUpdateModalClick={handleOpenDemoteToUserModalClick}
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
