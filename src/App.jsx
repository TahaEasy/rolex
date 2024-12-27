import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";

import { Provider } from "react-redux";

import store from "./store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { saveState } from "./utils/helper";
import Cart from "./pages/Cart";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";

store.subscribe(() => {
  saveState("cart", {
    cart: store.getState().cart,
  });
  saveState("wishlist", {
    wishlist: store.getState().wishlist,
  });
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order/:orderId" element={<Order />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
