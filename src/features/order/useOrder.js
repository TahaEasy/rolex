import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiOrder";

export const useOrder = (orderId) => {
  const { data: order, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrder(orderId),
  });

  return { order, isLoading };
};
