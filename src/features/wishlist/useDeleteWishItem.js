import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWishlistItem as deleteWishlistItemApi } from "../../services/apiWishlist";
import toast from "react-hot-toast";

export const useDeleteWishlistItem = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteWishlistItem, isPending: isLoading } = useMutation({
    mutationKey: ["wishlist"],
    mutationFn: deleteWishlistItemApi,
    onSuccess: () => {
      toast.success("ساعت از لیست علاقه مندی حذف شد!");
      queryClient.invalidateQueries();
    },
    onError: () => toast.error("متاسفانه ساعت از لیست علاقه مندی حذف نشد!"),
  });

  return { deleteWishlistItem, isLoading };
};
