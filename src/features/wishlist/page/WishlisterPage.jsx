import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearWishlist } from "../wishlistSlice";
import { useWishlist } from "../useWishlist";

import WishlistPage from "./WishlistPage";
import Spinner from "../../../ui/Spinner";

const WishlisterPage = () => {
  const pervWishlist = useSelector((store) => store.wishlist.wishlist);
  const dispatch = useDispatch();

  const { wishlist, isLoading } = useWishlist(pervWishlist, true) || "";

  useEffect(() => {
    if (pervWishlist) {
      dispatch(clearWishlist());
    }
  }, []);

  if (isLoading) return <Spinner size={200} />;

  return <WishlistPage wishlist={wishlist} />;
};

export default WishlisterPage;
