import axios from "axios";
import { BASE_API_URL } from "../constants";
import { User } from "../types/user";

export const getUsers = async () => {
  try {
    const res = await axios.get<User[]>(`${BASE_API_URL}/users`);
    const data = res.data;
    return data;
  } catch (e) {
    console.error(e);
  }
};
