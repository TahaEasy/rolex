import styled from "styled-components";
import WhichCartPage from "./WhichCartPage";

const StyledCartPage = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  border-bottom: var(--color-wheat) dashed 1px;
`;

const CartPage = () => {
  return (
    <StyledCartPage>
      <HeaderContainer>
        <Header>سبد خرید</Header>
      </HeaderContainer>
      <WhichCartPage />
    </StyledCartPage>
  );
};

export default CartPage;
