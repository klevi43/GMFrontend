import React from "react";
import type UserDto from "../../dtos/userDto";
interface Props {
  userDto: UserDto;
}
const UserListItemDetails = ({ userDto }: Props) => {
  return (
    <>
      <div className="flex items-baseline px-3 overflow-hidden">
        <span className="font-bold text-[1.5rem]">{userDto.email}</span>
        <span className="text-[2rem] px-2"> | </span>

        <span className=" text-end text-[1rem] truncate">
          {userDto.role === "ROLE_ADMIN" ? "Administrator" : "User"}
        </span>
      </div>
    </>
  );
};

export default UserListItemDetails;
