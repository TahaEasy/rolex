import { useSelector } from "react-redux";
import WishlistPage from "./WishlistPage";

const WishlistReduxPage = () => {
  const wishlist = useSelector((store) => store.wishlist.wishlist) || "";

  return <WishlistPage wishlist={wishlist} />;
};

export default WishlistReduxPage;
