import { useSelector } from "react-redux";
import styled from "styled-components";

import CartTable from "./CartTable";
import CartSummary from "./CartSummary";
import Empty from "../../../ui/Empty";
import { lg } from "../../../styles/GlobalStyles";

const CartPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-columns: 65% 35%;

  @media ${lg} {
    display: grid;
  }
`;

const CartReduxPage = () => {
  const cart = useSelector((store) => store.cart.cart) || "";
  if (!cart || cart.length === 0)
    return <Empty resourceName="سبد خرید" to="/" helperLink="صفحه اصلی" />;

  return (
    <CartPageLayout>
      <CartTable cart={cart} />
      <CartSummary cart={cart} />
    </CartPageLayout>
  );
};

export default CartReduxPage;
