import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incCartItemNumber } from "../../services/apiCart";
import toast from "react-hot-toast";

export const useIncItemNum = () => {
  const queryClient = useQueryClient();

  const { mutate: incCartItemNum, isPending: isLoading } = useMutation({
    mutationKey: ["cart"],
    mutationFn: incCartItemNumber,
    onError: (err) => toast.error(err.message),
    onSettled: () => queryClient.invalidateQueries(),
  });

  return { incCartItemNum, isLoading };
};
