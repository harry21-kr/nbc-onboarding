import { User } from "../../../../types/user";
import UserItem from "./UserItem";

interface UserListProps {
  userList: User[];
}

const UserList = ({ userList }: UserListProps) => {
  return (
    <ul>
      {userList.map((userItem) => (
        <UserItem key={userItem.id} user={userItem} />
      ))}
    </ul>
  );
};

export default UserList;
