import { User } from "../../../../types/user";

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { name, username, phone } = user;
  return (
    <li>
      <h3>
        {name}, {username}
      </h3>
      <p>{phone}</p>
    </li>
  );
};

export default UserItem;
