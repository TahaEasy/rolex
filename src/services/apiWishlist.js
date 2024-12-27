import supabase from "./supabase";

export const createWishlistItem = async (watchId) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: wishlistId },
  } = await supabase.from("wishlists").select().eq("userId", userId).single();

  const { data: alreadyExitsData } = await supabase
    .from("wishlistItems")
    .select()
    .eq("watchId", watchId)
    .eq("wishlistId", wishlistId);

  if (alreadyExitsData?.length > 0) {
    throw new Error("ساعت قبلا به لیست علاقه مندی اضافه شده!");
  }

  const { data, error } = await supabase
    .from("wishlistItems")
    .insert([{ watchId, wishlistId }]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteWishlistItem = async (watchId) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: wishlistId },
  } = await supabase
    .from("wishlists")
    .select("*")
    .eq("userId", userId)
    .single();

  const { error } = await supabase
    .from("wishlistItems")
    .delete()
    .eq("wishlistId", wishlistId)
    .eq("watchId", watchId);

  if (error) {
    throw new Error(error.message);
  }
};

export const getWishlistItems = async (
  prevWishlist = [],
  updateFromRedux = false
) => {
  let userId = (await supabase.auth.getUser()).data.user.id;
  let {
    data: { id: wishlistId },
  } = await supabase
    .from("wishlists")
    .select("*")
    .eq("userId", userId)
    .single();

  let { data, error } = await supabase
    .from("wishlistItems")
    .select(
      `
      watches (
        id,
        name,
        price,
        discount,
        image
      )
    `
    )
    .eq("wishlistId", wishlistId)
    .order("created_at", { ascending: false });

  if (updateFromRedux && prevWishlist && data) {
    const filteredWishlist = prevWishlist.filter((wishlistItem) => {
      const foundItem = data.find(
        (dataItem) => dataItem.watches.id === wishlistItem.watches.id
      );

      if (!foundItem) {
        return true;
      }
    });

    const finalWishlist = filteredWishlist.map((item) => ({
      wishlistId,
      watchId: item.watches.id,
    }));

    if (finalWishlist.length > 0) {
      await supabase.from("wishlistItems").insert(finalWishlist);
    }
  }

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const addToCart = async (watchId) => {
  // get wishlist and cart
  let userId = (await supabase.auth.getUser()).data.user.id;

  let {
    data: { id: wishlistId },
  } = await supabase
    .from("wishlists")
    .select("*")
    .eq("userId", userId)
    .single();

  let {
    data: { id: cartId },
  } = await supabase.from("carts").select("*").eq("userId", userId).single();

  // check if cart item already exits
  const { data: alreadyExitsData } = await supabase
    .from("cartItems")
    .select()
    .eq("watchId", watchId)
    .eq("cartId", cartId);

  if (alreadyExitsData?.length > 0) {
    throw new Error("ساعت قبلا به سبد خرید اضافه شده!");
  }

  // delete the wishlist item
  let { error: deleteError } = await supabase
    .from("wishlistItems")
    .delete()
    .eq("wishlistId", wishlistId)
    .eq("watchId", watchId);

  if (deleteError) {
    throw new Error(deleteError.message);
  }

  // add the new cart item
  const { data, error } = await supabase
    .from("cartItems")
    .insert([{ watchId, cartId, number: 1 }]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
