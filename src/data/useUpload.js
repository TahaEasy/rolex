import { useMutation } from "@tanstack/react-query";
import { uploadAllWatches } from "../services/apiWatches";
import toast from "react-hot-toast";
import { watches } from "./watches";

export const useUpload = () => {
  const { mutate: upload, isPending: isLoading } = useMutation({
    mutationKey: ["watch"],
    mutationFn: () => uploadAllWatches(watches),
    onSuccess: () =>
      toast.success(
        "(خداوندا، گناهانم را ببخش و مرا بیامرز و مرا از دوست داران خود قرار بده، الهی آمین یا رب العالمین 🤲)"
      ),
    onError: (err) => toast.error(err.message),
  });

  return { upload, isLoading };
};
