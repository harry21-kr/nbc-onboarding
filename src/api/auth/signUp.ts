import axios from "axios";
import { AUTH_API_URL } from "../../constants";

interface SignUpData {
  id: string;
  password: string;
  nickname: string;
}

export const signUp = async (signUpData: SignUpData) => {
  try {
    const res = await axios.post(`${AUTH_API_URL}/register`, signUpData);
    const data = res.data;
    return data;
  } catch (e) {
    console.error(e);
  }
};
