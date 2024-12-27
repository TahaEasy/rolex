import { useSelector } from "react-redux";
import WishlistButton from "./WishlistButton";

const WishlistRedux = () => {
  const wishlist = useSelector((store) => store.wishlist.wishlist) || "";

  return <WishlistButton wishlist={wishlist} />;
};

export default WishlistRedux;
