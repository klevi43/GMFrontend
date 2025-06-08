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
          <UserListItem userDto={userDto} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
