import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import { loadState } from "./utils/helper";
import wishlistSlice from "./features/wishlist/wishlistSlice";

const reducers = combineReducers({
  cart: cartSlice,
  wishlist: wishlistSlice,
});

const preloadedState = {
  ...loadState("cart"),
  ...loadState("wishlist"),
};

export default configureStore({
  reducer: reducers,
  preloadedState,
});
