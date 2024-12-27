import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../../../services/apiOrder";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCreateOrder = () => {
  const navigate = useNavigate();

  const { mutate: order, isPending: isLoading } = useMutation({
    mutationKey: ["cart"],
    mutationFn: createOrder,
    onSuccess: (orderId) => {
      toast.success("سفارش با موفقیت ثبت شد!");
      navigate(`/order/${orderId}`, { replace: true });
    },
    onError: (e) => toast.error(e.message),
  });

  return { order, isLoading };
};
