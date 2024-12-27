import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWishlistItem as createWishlistItemApi } from "../../services/apiWishlist";
import toast from "react-hot-toast";

export const useCreateWishlistItem = () => {
  const queryClient = useQueryClient();

  const { mutate: createWishlistItem, isPending: isLoading } = useMutation({
    mutationKey: ["cart"],
    mutationFn: createWishlistItemApi,
    onSuccess: () => {
      toast.success("ساعت به لیست علاقه مندی اضافه شد!");
      queryClient.invalidateQueries();
    },
    onError: (err) => toast.error(err.message),
  });

  return { createWishlistItem, isLoading };
};
