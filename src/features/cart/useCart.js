import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../../services/apiCart";

export const useCart = (prevCart = [], updateFromRedux = false) => {
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartItems(prevCart, updateFromRedux),
  });

  return { cart, isLoading };
};
