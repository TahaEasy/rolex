import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearWishlist } from "./wishlistSlice";
import { useWishlist } from "./useWishlist";
import WishlistButton from "./WishlistButton";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;

const Wishlister = () => {
  const pervWishlist = useSelector((store) => store.wishlist.wishlist);
  const dispatch = useDispatch();

  const { wishlist = "", isLoading } = useWishlist(pervWishlist, true);

  useEffect(() => {
    if (pervWishlist) {
      dispatch(clearWishlist());
    }
  }, []);

  if (isLoading)
    return (
      <Loading>
        <Spinner size={20} />
      </Loading>
    );

  return <WishlistButton wishlist={wishlist} isLoading={isLoading} />;
};

export default Wishlister;
