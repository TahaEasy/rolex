import { useIsUser } from "../../hooks/useIsUser";
import CartRedux from "./CartRedux";
import Carter from "./Carter";

const WhichCart = () => {
  const isUser = useIsUser();
  return <>{isUser ? <Carter /> : <CartRedux />}</>;
};

export default WhichCart;
