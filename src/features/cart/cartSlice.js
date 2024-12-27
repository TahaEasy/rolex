import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const exits = state.cart.find(
        (item) => item.watches.id === action.payload.item.id
      );
      if (exits) {
        toast.error("ساعت قبلا به سبد خرید اضافه شده!");
      } else {
        state.cart.push({
          number: action.payload.number ? action.payload.number : 1,
          watches: action.payload.item,
        });
        toast.success("ساعت به سبد خرید اضافه شد!");
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.watches.id !== action.payload
      );
    },
    increaseItemNumber(state, action) {
      const item = state.cart.find(
        (item) => item.watches.id === action.payload
      );
      item.number++;
    },
    decreaseItemNumber(state, action) {
      const item = state.cart.find(
        (item) => item.watches.id === action.payload
      );
      if (item.number === 1) return;
      item.number--;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemNumber,
  decreaseItemNumber,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
