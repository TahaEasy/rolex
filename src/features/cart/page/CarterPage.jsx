import CartTable from "./CartTable";
import CartSummary from "./CartSummary";
import { useCart } from "../useCart";
import Empty from "../../../ui/Empty";
import styled from "styled-components";
import { lg } from "../../../styles/GlobalStyles";
import Spinner from "../../../ui/Spinner";

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

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarterPage = () => {
  const { cart, isLoading } = useCart() || [];

  if (isLoading)
    return (
      <Loading>
        <Spinner size={200} />
      </Loading>
    );

  if (!cart || cart.length === 0)
    return <Empty resourceName="سبد خرید" to="/" helperLink="صفحه اصلی" />;

  return (
    <CartPageLayout>
      <CartTable cart={cart} />
      <CartSummary cart={cart} />
    </CartPageLayout>
  );
};

export default CarterPage;
