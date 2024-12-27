import supabase from "./supabase";

export const createOrder = async (cart) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: cartId },
  } = await supabase.from("carts").select("*").eq("userId", userId).single();

  if (!userId) {
    throw new Error("برای ثبت سفارش باید حساب کاربری داشته باشید!");
  }

  const {
    data: { id: orderId },
    error: orderError,
  } = await supabase.from("orders").insert({ userId }).select().single();

  if (orderError) {
    throw new Error("متاسفانه مشکلی پیش آمد و سفارش ثبت نشد!");
  }

  const finalData = cart.map((item) => {
    return { watchId: item.watches.id, orderId, number: item.number };
  });

  const { error: newOrderItemsError } = await supabase
    .from("orderItems")
    .insert(finalData);

  if (newOrderItemsError) {
    throw new Error(newOrderItemsError);
  }

  const { error: cartItemsDeletionError } = await supabase
    .from("cartItems")
    .delete()
    .eq("cartId", cartId);
  if (cartItemsDeletionError) {
    throw new Error(cartItemsDeletionError);
  }

  return orderId;
};

export const getOrder = async (orderId) => {
  const { data, error } = await supabase
    .from("orderItems")
    .select(
      `
        number,
        watches (
          name,
          price,
          discount,
          image,
          brands (
            brandName
          )
        )
      `
    )
    .eq("orderId", orderId);

  if (error) {
    throw new Error(error);
  }

  return data;
};
