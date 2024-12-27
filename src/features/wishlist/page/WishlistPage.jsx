import styled from "styled-components";
import WishlistItemPage from "./WishlistItemPage";
import { useIsUser } from "../../../hooks/useIsUser";
import Empty from "../../../ui/Empty";
import { lg } from "../../../styles/GlobalStyles";

const StyledWishlistPage = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 680px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${lg} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1154px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  border-bottom: var(--color-wheat) dashed 1px;
`;

const WishlistPage = ({ wishlist }) => {
  const isUser = useIsUser();
  if (!wishlist || wishlist.length == 0)
    return (
      <Empty resourceName="لیست علاقه مندی" to="/" helperLink="صفحه اصلی" />
    );
  return (
    <>
      <HeaderContainer>
        <Header>لیست علاقه مندی</Header>
      </HeaderContainer>
      <StyledWishlistPage>
        {wishlist.map((item) => (
          <WishlistItemPage key={item} item={item} isUser={isUser} />
        ))}
      </StyledWishlistPage>
    </>
  );
};

export default WishlistPage;
