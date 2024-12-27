import { useQuery } from "@tanstack/react-query";
import { getWatches } from "../../services/apiWatches";

export const useWatches = (from = 0, to = 9) => {
  const { data: watches, isLoading } = useQuery({
    queryKey: ["watch"],
    queryFn: () => getWatches(from, to),
  });

  return { watches, isLoading };
};
