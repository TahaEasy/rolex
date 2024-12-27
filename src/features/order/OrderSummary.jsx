import { formatCurrency, formatPercentCurrency } from "../../utils/helper";
import ButtonNormal from "../../ui/ButtonNormal";
import styled from "styled-components";
import { lg } from "../../styles/GlobalStyles";

const StyledOrderSummary = styled.div`
  position: relative;
  padding: 1rem;
  height: 100%;
  width: 100%;
`;

const BoxContainer = styled.div`
  position: sticky;
  top: 8rem;
  padding: 8px 1rem;
  background-color: var(--color-dark-secondary-label);
  border-radius: 4px;
`;

const Heading = styled.h3`
  margin-top: 0;
  color: var(--color-white);
`;

const Details = styled.div`
  border-bottom: 1px solid rgba(var(--color-white-rgb), 0.2);
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: rgba(var(--color-white-rgb), 0.5);
    margin: 8px 0;
  }
`;

const DetailRowLast = styled(DetailRow)`
  & p {
    color: var(--color-white);
    margin: 8px 0;
    font-size: large;
  }
`;

const Discount = styled.p`
  color: rgba(var(--color-success-rgb), 0.5) !important;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  column-gap: 10px;

  & :nth-child(1) {
    margin-bottom: 8px;
  }
  @media ${lg} {
    flex-direction: column;
    column-gap: 10px;
  }
`;

const OrderSummary = ({ order }) => {
  const totalNormalPrice = order.reduce(
    (acc, curr) => acc + curr.watches.price * curr.number,
    0
  );
  const totalNumber = order.reduce((acc, curr) => acc + curr.number, 0);
  const totalDiscount = order.reduce(
    (acc, curr) =>
      acc +
      formatPercentCurrency(curr.watches.price, curr.watches.discount) *
        curr.number,
    0
  );

  const totalPrice = totalNormalPrice - totalDiscount + 50000;

  return (
    <StyledOrderSummary>
      <BoxContainer>
        <Heading>جزئیات سفارش ({totalNumber} مورد)</Heading>
        <Details>
          <DetailRow>
            <p>کل محصولات</p>
            <p>{formatCurrency(totalNormalPrice)}</p>
          </DetailRow>
          <DetailRow>
            <p>کل تخفیف</p>
            <Discount>{formatCurrency(totalDiscount)}</Discount>
          </DetailRow>
          <DetailRow>
            <p>تحویل</p>
            <p>{formatCurrency(50000)}</p>
          </DetailRow>
        </Details>
        <DetailRowLast>
          <p>کل مبلغ</p>
          <p>{formatCurrency(totalPrice)}</p>
        </DetailRowLast>
        <ActionButtonsContainer>
          <ButtonNormal to="/" replace={true}>
            بازگشت
          </ButtonNormal>
        </ActionButtonsContainer>
      </BoxContainer>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
