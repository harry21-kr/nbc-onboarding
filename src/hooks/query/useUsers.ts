import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { getUsers } from "../../api/getUsers";
import { User } from "../../types/user";

const useUsers = () => {
  const { userList: initialUserData } = useLoaderData() as { userList: User[] };

  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    initialData: initialUserData,
  });
};

export default useUsers;
