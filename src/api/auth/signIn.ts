import axios from "axios";
import { AUTH_API_URL } from "../../constants";

interface SignInData {
  id: string;
  password: string;
}

export const signIn = async (signInData: SignInData) => {
  try {
    const res = await axios.post(
      `${AUTH_API_URL}/login?expiresIn=10m`,
      signInData
    );
    const data = res.data;
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};
