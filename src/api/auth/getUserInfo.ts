import axios from "axios";
import { AUTH_API_URL } from "../../constants";

const getUserInfo = async (accessToken: string) => {
  try {
    const res = await axios.get(`${AUTH_API_URL}/user`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = res.data;
    console.log(data);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export default getUserInfo;
