import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../api/auth/signUp";

const useSignUpMutation = () => {
  return useMutation({
    mutationKey: ["signUpMutation"],
    mutationFn: signUp,
  });
};

export default useSignUpMutation;
