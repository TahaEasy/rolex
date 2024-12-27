import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlistItem(state, action) {
      const exits = state.wishlist.find(
        (item) => item.watches.id === action.payload.id
      );
      if (exits) {
        toast.error("ساعت قبلا به لیست علاقه مندی اضافه شده!");
      } else {
        state.wishlist.push({ watches: action.payload });
        toast.success("ساعت به لیست علاقه مندی اضافه شد!");
      }
    },
    removeWishlistItem(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.watches.id !== action.payload
      );
    },
    clearWishlist(state) {
      state.wishlist = [];
    },
  },
});

export const { addWishlistItem, removeWishlistItem, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
