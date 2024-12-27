import { useIsUser } from "../../hooks/useIsUser";
import WishlistRedux from "./WishlistRedux";
import Wishlister from "./Wishlister";

const WhichWishlist = () => {
  const isUser = useIsUser();
  return <>{isUser ? <Wishlister /> : <WishlistRedux />}</>;
};

export default WhichWishlist;
