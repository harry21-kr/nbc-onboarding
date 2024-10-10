import axios from "axios";
import { AUTH_API_URL } from "../../constants";

interface SignInData {
  id: string;
  password: string;
}

interface UserResponse {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
}

export const signIn = async (signInData: SignInData) => {
  try {
    const res = await axios.post<UserResponse>(
      `${AUTH_API_URL}/login?expiresIn=10m`,
      signInData
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.error(e);
  }
};
