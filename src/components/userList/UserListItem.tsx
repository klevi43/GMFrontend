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
      <li className="w-[100%] mb-2 flex justify-between items-baseline">
        <div className=" border-l-8 border-primary text-text bg-background max-w-[100%] overflow-hidden truncate ">
          <UserListItemDetails userDto={userDto} />
        </div>
        <div className="relative">
          {openMenuId === userDto.id &&
            userDto.role === "ROLE_USER" &&
            type === "USER" && (
              <ListItemMenuModal
                updateOptionText="Promote to Administrator"
                deleteOptionText="Delete User"
                handleOpenUpdateModalClick={handleOpenPromoteToAdminModalClick}
                handleOpenDeleteModalClick={handleOpenDeleteModalClick}
              />
            )}
          {openMenuId === userDto.id &&
            userDto.role === "ROLE_ADMIN" &&
            type === "USER" && (
              <ListItemMenuModal
                updateOptionText="Demote to User"
                deleteOptionText="Delete User"
                handleOpenUpdateModalClick={handleOpenDemoteToUserModalClick}
                handleOpenDeleteModalClick={handleOpenDeleteModalClick}
              />
            )}
          {userDto.email !== data?.userEmail && (
            <ListItemOptionsButton
              showMenu={showOpenMenu}
              id={userDto.id}
              type="USER"
            />
          )}
        </div>
      </li>
    </>
  );
};

export default UserListItem;
