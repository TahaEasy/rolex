import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem as deleteCartItemApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteCartItem, isPending: isLoading } = useMutation({
    mutationKey: ["cart"],
    mutationFn: deleteCartItemApi,
    onSuccess: () => {
      toast.success("ساعت از سبد خرید حذف شد!");
      queryClient.invalidateQueries();
    },
    onError: () => toast.success("متاسفانه ساعت از سبد خرید حذف نشد!"),
  });

  return { deleteCartItem, isLoading };
};
