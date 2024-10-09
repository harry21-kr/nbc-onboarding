import dayjs from "dayjs";
import { useEffect } from "react";
import parseJwt from "../utils/parseJwt";

const useWatchAccountStatus = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { iat, exp } = parseJwt(token);
      const now = dayjs().unix();

      if (iat < now && now < exp) {
        console.log("토큰 사용 가능");
      } else {
        console.error("토큰 만료됨");
      }
    }
    // 토큰이 있다면, 토큰의 만료일자를 확인
    // 만료일자 전이라면 유저 정보 Fetch
    // 유저 정보 전역 상태에 저장
    // 만료일자가 지났다면 토큰 삭제
  }, []);
};

export default useWatchAccountStatus;
