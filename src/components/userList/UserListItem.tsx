import type UserDto from "../../dtos/userDto";
import { useLoadAuthUser } from "../../hooks/useLoadAuthUser";
import { useMenu } from "../../hooks/useMenu";
import { useMod } from "../../hooks/useMod";
import ListItemMenuModal from "../ListItemMenuModal";
import ListItemOptionsButton from "../ListItemOptionsButton";
import UserListItemDetails from "./UserListItemDetails";
interface Props {
  userDto: UserDto;
}
const UserListItem = ({ userDto }: Props) => {
  const { type, openMenuId, showOpenMenu } = useMenu();
  const { openModal } = useMod();
  const { data } = useLoadAuthUser();

  const handleOpenPromoteToAdminModalClick = () => {
    showOpenMenu(-1, undefined);
    openModal("ADMIN_PROMOTE_USER", userDto);
  };

  const handleOpenDemoteToUserModalClick = () => {
    showOpenMenu(-1, undefined);
    openModal("ADMIN_DEMOTE_ADMIN", userDto);
  };
  const handleOpenDeleteModalClick = () => {
    showOpenMenu(-1, undefined);
    openModal("ADMIN_DELETE_USER", userDto);
  };

  return (
    <>
      <li className="w-[100%] pb-2 hover:pl-4 transition-all duration-300 active:pl-5">
        <div className=" border-l-8 border-primary text-text my-full bg-background  transition-all duration-300  hover:text-primary active:text-primary">
          <div className="flex justify-between items-baseline">
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
              {userDto.email !== data?.userEmail && type === "USER" && (
                <ListItemOptionsButton
                  showMenu={showOpenMenu}
                  id={userDto.id}
                  type="USER"
                />
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default UserListItem;
