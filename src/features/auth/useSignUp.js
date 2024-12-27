import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const queryClient = useQueryClient();

  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationKey: ["user"],
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("حساب شما با موفقیت ساخته شد!");
      queryClient.setQueryData(["user"], data.user);
    },
    onError: (err) => {
      let errMessage = "مشکلی پیش آمد و حساب شما ساخته نشد!";
      if (err.message === "User already registered") {
        errMessage = "این ایمیل قبلا استفاده شده است!";
      }
      toast.error(errMessage);
    },
  });

  return { signup, isLoading };
};
