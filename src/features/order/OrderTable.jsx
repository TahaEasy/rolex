import styled from "styled-components";
import OrderTableItem from "./OrderTableItem";
import { sm, xs } from "../../styles/GlobalStyles";

const StyledOrderTable = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  align-self: start;
`;

const OrderTableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px solid var(--color-dark-secondary-label);

  @media ${xs} {
    grid-template-columns: 4.5fr 1.5fr;
  }
  @media ${sm} {
    grid-template-columns: 4fr 1fr 1fr;
  }
  @media (min-width: 1240px) {
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }
`;

const Price = styled.p`
  display: none;

  @media (min-width: 1240px) {
    display: block;
  }
`;

const TotalPrice = styled.p`
  display: none;

  @media ${xs} {
    display: block;
  }
`;

const Number = styled.p`
  display: none;

  @media ${sm} {
    display: block;
  }
`;
const OrderTable = ({ order }) => {
  return (
    <StyledOrderTable>
      <OrderTableRow>
        <p>ساعت ها</p>
        <Price>قیمت</Price>
        <Number>تعداد</Number>
        <TotalPrice>جمع کل</TotalPrice>
      </OrderTableRow>
      {order.map((item, index) => (
        <OrderTableItem key={index} watch={item.watches} number={item.number} />
      ))}
    </StyledOrderTable>
  );
};

export default OrderTable;
