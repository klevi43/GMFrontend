import type UserDto from "../../dtos/userDto";
import UserListItem from "./UserListItem";

interface Props {
  userDtos: UserDto[];
}
const UserList = ({ userDtos }: Props) => {
  return (
    <>
      <ul>
        {userDtos.map((userDto) => (
          <UserListItem key={userDto.id} userDto={userDto} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
