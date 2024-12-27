import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../../services/apiWishlist";
import toast from "react-hot-toast";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  const { mutate: addToCart, isPending: isAddingToCart } = useMutation({
    mutationKey: ["wishlist", "cart"],
    mutationFn: addToCartApi,
    onSuccess: () => {
      toast.success("ساعت به سبد خرید اضافه شد!");
      queryClient.invalidateQueries();
    },
    onError: (err) => toast.error(err.message),
  });

  return { addToCart, isAddingToCart };
};
