import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/auth/signIn";

const useSignInMutation = () => {
  return useMutation({
    mutationKey: ["signInMutation"],
    mutationFn: signIn,
    onSuccess: (data) => localStorage.setItem("token", data!.accessToken),
  });
};

export default useSignInMutation;
