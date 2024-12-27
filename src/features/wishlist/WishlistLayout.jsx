import styled from "styled-components";

import Empty from "../../ui/Empty";
import { useIsUser } from "../../hooks/useIsUser";
import WishlistItem from "./WishlistItem";

const StyledWishlistItemContainer = styled.div`
  max-width: 20rem;
  max-height: 299px;
  overflow-y: scroll;
`;

const WishlistLayout = ({ wishlist = {} }) => {
  const isUser = useIsUser();
  if (!wishlist.length) return <Empty resourceName="لیست علاقه مندی" />;

  return (
    <>
      <StyledWishlistItemContainer>
        {wishlist.map((item, index) => {
          const { watches: watch } = item;
          return <WishlistItem key={index} watch={watch} isUser={isUser} />;
        })}
      </StyledWishlistItemContainer>
    </>
  );
};

export default WishlistLayout;
