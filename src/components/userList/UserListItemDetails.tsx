import type UserDto from "../../dtos/userDto";
interface Props {
  userDto: UserDto;
}
const UserListItemDetails = ({ userDto }: Props) => {
  return (
    <>
      {/* <div className="flex items-baseline px-3  py-3 overflow-hidden max-w-[100%]">
        <span className="font-bold text-[1.2rem]">{userDto.email}</span>
        <span className="text-[1.4rem] px-2"> | </span>
        <span className=" text-end text-[1rem] ">
          {userDto.role === "ROLE_ADMIN" ? "Administrator" : "User"}
        </span>
      </div> */}
      <div className="flex items-baseline p-3 overflow-hidden w-full">
        <span className="font-bold text-[1.2rem] truncate whitespace-nowrap max-w-[80%]">
          {userDto.email}
        </span>
        <span className="text-[1.4rem] px-2 flex-shrink-0">|</span>
        <span className="text-[1rem]">
          {userDto.role === "ROLE_ADMIN" ? "Administrator" : "User"}
        </span>
      </div>
    </>
  );
};

export default UserListItemDetails;
