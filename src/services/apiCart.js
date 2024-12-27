import supabase from "./supabase";

export const createCartItem = async ({ watchId, number }) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: cartId },
  } = await supabase.from("carts").select("*").eq("userId", userId).single();

  const { data: alreadyExitsData } = await supabase
    .from("cartItems")
    .select()
    .eq("watchId", watchId)
    .eq("cartId", cartId);

  if (alreadyExitsData?.length > 0) {
    throw new Error("ساعت قبلا به سبد خرید اضافه شده!");
  }

  const { data, error } = await supabase
    .from("cartItems")
    .insert([{ watchId, cartId, number: number ? number : 1 }]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteCartItem = async (watchId) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: cartId },
  } = await supabase.from("carts").select("*").eq("userId", userId).single();

  const { error } = await supabase
    .from("cartItems")
    .delete()
    .eq("cartId", cartId)
    .eq("watchId", watchId);

  if (error) {
    throw new Error(error.message);
  }
};

export const getCartItems = async (prevCart = [], updateFromRedux = false) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: cartId },
  } = await supabase.from("carts").select("*").eq("userId", userId).single();

  let { data, error } = await supabase
    .from("cartItems")
    .select(
      `
      number,
      watches (
        id,
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
    .eq("cartId", cartId)
    .order("created_at", { ascending: false });

  if (updateFromRedux && prevCart && data) {
    const filteredCart = prevCart.filter((cartItem) => {
      const foundItem = data.find(
        (dataItem) => dataItem.watches.id === cartItem.watches.id
      );

      if (!foundItem) {
        return true;
      }
    });

    const finalCart = filteredCart.map((item) => ({
      cartId,
      watchId: item.watches.id,
      number: item.number,
    }));

    if (finalCart.length > 0) {
      await supabase.from("cartItems").insert(finalCart);
    }
  }

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const incCartItemNumber = async (watchId) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: cartId },
  } = await supabase.from("carts").select("*").eq("userId", userId).single();

  let {
    data: { number },
  } = await supabase
    .from("cartItems")
    .select("number")
    .single()
    .eq("cartId", cartId)
    .eq("watchId", watchId);

  const { error } = await supabase
    .from("cartItems")
    .update({
      number: number + 1,
    })
    .eq("cartId", cartId)
    .eq("watchId", watchId);

  if (error) {
    throw new Error(error.message);
  }
};

export const decCartItemNumber = async (watchId) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: cartId },
  } = await supabase.from("carts").select("*").eq("userId", userId).single();

  let {
    data: { number },
  } = await supabase
    .from("cartItems")
    .select("number")
    .single()
    .eq("cartId", cartId)
    .eq("watchId", watchId);

  if (number - 1 === 0) {
    return;
  }

  const { error } = await supabase
    .from("cartItems")
    .update({
      number: number - 1,
    })
    .eq("cartId", cartId)
    .eq("watchId", watchId);

  if (error) {
    throw new Error(error.message);
  }
};
