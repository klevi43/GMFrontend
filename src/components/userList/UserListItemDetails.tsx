import type UserDto from "../../dtos/userDto";
interface Props {
  userDto: UserDto;
}
const UserListItemDetails = ({ userDto }: Props) => {
  return (
    <>
      <div className="flex items-baseline px-3  py-3 overflow-hidden truncate">
        <span className="font-bold text-[1.2rem]">{userDto.email}</span>
        <span className="text-[1.4rem] px-2"> | </span>
        <span className=" text-end text-[1rem]">
          {userDto.role === "ROLE_ADMIN" ? "Administrator" : "User"}
        </span>
      </div>
    </>
  );
};

export default UserListItemDetails;
