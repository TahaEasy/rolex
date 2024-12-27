import styled from "styled-components";

import Empty from "../../ui/Empty";
import ButtonBox from "../../ui/ButtonBox";
import CartItem from "./CartItem";
import { useIsUser } from "../../hooks/useIsUser";

const StyledCartItemContainer = styled.div`
  max-width: 20rem;
  max-height: 299px;
  overflow-y: scroll;
`;

const CartLayout = ({ cart = {} }) => {
  const isUser = useIsUser();
  if (!cart.length) return <Empty resourceName="سبد خرید" />;

  return (
    <>
      <StyledCartItemContainer>
        {cart.map((item, index) => {
          const { number, watches: watch } = item;
          return (
            <CartItem
              key={index}
              number={number}
              watch={watch}
              isUser={isUser}
            />
          );
        })}
      </StyledCartItemContainer>
    </>
  );
};

export default CartLayout;
