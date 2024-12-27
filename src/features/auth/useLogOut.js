import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signout } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useLogOut = () => {
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: signout,
    onSuccess: () => {
      queryClient.setQueryData(["user"], {});
      queryClient.invalidateQueries();
      toast.success("با موفقیت از حساب خارج شدید!");
    },
  });

  return { logout, isLoading };
};
