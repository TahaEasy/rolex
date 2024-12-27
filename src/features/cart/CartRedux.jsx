import { useSelector } from "react-redux";
import CartButton from "./CartButton";

const CartRedux = () => {
  const cart = useSelector((store) => store.cart.cart) || "";

  return <CartButton cart={cart} />;
};

export default CartRedux;
