import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin as signinApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useSignIn = () => {
  const queryClient = useQueryClient();

  const { mutate: signin, isPending: isLoading } = useMutation({
    mutationKey: ["user"],
    mutationFn: signinApi,
    onSuccess: (data) => {
      toast.success("با موفقیت وارد حساب خود شدید!");
      queryClient.setQueryData(["user"], data.user);
      queryClient.invalidateQueries();
    },
    onError: () => toast.error("ایمیل یا رمز عبور اشتباه است!"),
  });

  return { signin, isLoading };
};
