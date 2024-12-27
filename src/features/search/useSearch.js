import { useMutation } from "@tanstack/react-query";
import { getSearchedWatches } from "../../services/apiWatches";

export const useSearch = () => {
  const { mutate: search, isPending: isLoading } = useMutation({
    mutationKey: ["search"],
    mutationFn: getSearchedWatches,
  });

  return { search, isLoading };
};
