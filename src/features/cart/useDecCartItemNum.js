import { useMutation, useQueryClient } from "@tanstack/react-query";
import { decCartItemNumber } from "../../services/apiCart";

export const useDecItemNum = () => {
  const queryClient = useQueryClient();

  const { mutate: decCartItemNum, isPending: isLoading } = useMutation({
    mutationKey: ["cart"],
    mutationFn: decCartItemNumber,
    onSettled: () => queryClient.invalidateQueries(),
  });

  return { decCartItemNum, isLoading };
};
