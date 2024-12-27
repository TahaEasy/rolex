import { useIsUser } from "../../../hooks/useIsUser";
import WishlistReduxPage from "./WishlistReduxPage";
import WishlisterPage from "./WishlisterPage";

const WhichWishlistPage = () => {
  const isUser = useIsUser();
  return <>{isUser ? <WishlisterPage /> : <WishlistReduxPage />}</>;
};

export default WhichWishlistPage;
