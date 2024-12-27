import { LuSearch } from "react-icons/lu";
import styled from "styled-components";
import Logo from "./Logo";
import Container from "./Container";
import FlexRow from "./FlexRow";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";
import Search from "../features/search/Search";
import { xxs } from "../styles/GlobalStyles";
import Auth from "../features/auth/Auth";
import UserAvatar from "../features/auth/UserAvatar";
import CartButton from "../features/cart/CartButton";
import WishlistButton from "../features/wishlist/WishlistButton";
import { Link } from "react-router-dom";
import WhichWishlist from "../features/wishlist/WhichWishlist";
import WhichCart from "../features/cart/WhichCart";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--color-dark);
  padding: 1rem 0;
  width: 100%;
  z-index: 60;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${xxs} {
    flex-direction: row;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 1rem;
  @media ${xxs} {
    margin-bottom: 0;
  }
`;

const FlexRowResponsive = styled(FlexRow)`
  align-items: center;

  @media ${xxs} {
    flex-direction: column-reverse;
    align-items: end;
    row-gap: 1rem;
  }

  @media (min-width: 450px) {
    flex-direction: row;
    align-items: center;
    row-gap: 0;
  }
`;

const ResponsiveUserAvatar = styled.div`
  display: none;
  @media (min-width: 530px) {
    display: block;
  }
`;

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <Search
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
        <MainContainer>
          <LogoContainer>
            <Link to="/" replace={true}>
              <Logo />
            </Link>
          </LogoContainer>
          <FlexRowResponsive>
            <FlexRow>
              <div>
                <ButtonIcon
                  icon={<LuSearch />}
                  onClick={() => setShowSearchBar(true)}
                />
              </div>
              <div>
                <WhichWishlist />
              </div>
              <div>
                <WhichCart />
              </div>
              <div>
                <Auth />
              </div>
            </FlexRow>
            <ResponsiveUserAvatar>
              <UserAvatar />
            </ResponsiveUserAvatar>
          </FlexRowResponsive>
        </MainContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
