import { useQuery } from "@tanstack/react-query";
import { getWishlistItems } from "../../services/apiWishlist";

export const useWishlist = (prevWishlist = [], updateFromRedux = false) => {
  const { data: wishlist, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlistItems(prevWishlist, updateFromRedux),
  });

  return { wishlist, isLoading };
};
