import axios from "axios";
import { BASE_API_URL } from "../constants";
import { Post } from "../types/post";

export const getPosts = async () => {
  try {
    const res = await axios.get<Post[]>(`${BASE_API_URL}/posts`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
