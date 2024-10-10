import useSignInMutation from "../../hooks/mutation/useSignInMutation";
import useSignUpMutation from "../../hooks/mutation/useSignUpMutation";

const LoginPage = () => {
  const { mutate: signIn } = useSignInMutation();
  const { mutate: signUp } = useSignUpMutation();
  return (
    <div>
      <button
        onClick={() =>
          signUp({ id: "harry21", password: "password", nickname: "박원빈" })
        }
      >
        회원가입
      </button>
      <button onClick={() => signIn({ id: "harry21", password: "password" })}>
        로그인
      </button>
    </div>
  );
};

export default LoginPage;
