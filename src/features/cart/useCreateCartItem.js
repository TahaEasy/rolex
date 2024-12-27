import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCartItem as createCartItemApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export const useCreateCartItem = () => {
  const queryClient = useQueryClient();

  const { mutate: createCartItem, isPending: isLoading } = useMutation({
    mutationKey: ["cart"],
    mutationFn: createCartItemApi,
    onSuccess: () => {
      toast.success("ساعت به سبد خرید اضافه شد!");
      queryClient.invalidateQueries()
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCartItem, isLoading };
};
