import styled from "styled-components";
import { lg } from "../../styles/GlobalStyles";
import { useParams } from "react-router-dom";
import { useOrder } from "./useOrder";
import Spinner from "../../ui/Spinner";
import OrderSummary from "./OrderSummary";
import OrderTable from "./OrderTable";
import Container from "../../ui/Container";
import NotFound from "../../pages/NotFound";

const StyledOrderPage = styled.div`
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
  width: 100%;
`;

const OrderPage = () => {
  const { orderId } = useParams();

  const { order = [{ itIsFound: true }], isLoading } = useOrder(orderId);

  if (!order || order.length === 0) return <NotFound resourceName="سفارش" />;

  return (
    <StyledOrderPage>
      <Container>
        <HeaderContainer>
          <Header>سفارش شماره {orderId}#</Header>
        </HeaderContainer>
        {isLoading ? (
          <Loading>
            <Spinner size={200} />
          </Loading>
        ) : (
          <CartPageLayout>
            <OrderTable order={order} />
            <OrderSummary order={order} />
          </CartPageLayout>
        )}
      </Container>
    </StyledOrderPage>
  );
};

export default OrderPage;
