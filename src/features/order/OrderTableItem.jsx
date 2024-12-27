import styled from "styled-components";
import { sm, xs } from "../../styles/GlobalStyles";
import { formatCurrency, formatPercent } from "../../utils/helper";

const OrderTableRow = styled.div`
  display: grid;
  padding: 24px 0;
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

const ItemColumn = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
`;

const ItemDetail = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ItemNumberColumn = styled(ItemColumn)`
  display: none;

  @media ${sm} {
    display: flex;
  }
`;

const ItemTotalPriceColumn = styled(ItemColumn)`
  display: none;

  @media ${xs} {
    display: flex;
  }
`;

const ItemPrice = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (min-width: 1240px) {
    display: flex;
  }
`;

const ItemImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  background-color: var(--color-dark-secondary-label);
`;

const ItemImg = styled.img`
  display: flex;
  justify-content: start;
  width: 6rem;
  height: 6rem;
`;

const Name = styled.p`
  font-size: 0.85rem;
  margin: 0;
  margin-left: 1rem;
`;
const Brand = styled.div`
  & span:nth-child(1) {
    color: var(--color-secondary);
  }
  & span:nth-child(2) {
    color: var(--color-wheat);
  }
`;

const Price = styled.p`
  color: var(--color-primary);
  margin: 0;
`;

const DiscountPrice = styled.p`
  color: var(--color-gray-500);
  margin: 0;
  font-size: 0.8rem;
  text-decoration: line-through;
`;

const HiddenPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  & p {
    margin: 0;

    @media (min-width: 370px) {
      margin: 4px;
    }
  }

  @media (min-width: 370px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1240px) {
    display: none;
  }
`;

const HiddenNumber = styled.div`
  display: block;

  @media ${sm} {
    display: none;
  }
`;

const OrderTableItem = ({ watch, number }) => {
  const {
    name,
    image,
    price,
    discount,
    brands: { brandName },
  } = watch;

  return (
    <OrderTableRow>
      <ItemDetail>
        <ItemImgContainer>
          <ItemImg src={image} alt={name} />
        </ItemImgContainer>
        <div>
          <Name>{name}</Name>
          <Brand className="make-white">
            <span>برند: </span>
            <span>{brandName ? brandName : "بدون برند"}</span>
          </Brand>
          <HiddenPrice>
            {discount !== 0 ? (
              <>
                <DiscountPrice>{formatCurrency(price)}</DiscountPrice>
                <Price>{formatCurrency(formatPercent(price, discount))}</Price>
              </>
            ) : (
              <Price>{formatCurrency(price)}</Price>
            )}
          </HiddenPrice>
          <HiddenNumber>
            <div>تعداد: {number}</div>
          </HiddenNumber>
        </div>
      </ItemDetail>
      <ItemPrice>
        {discount !== 0 ? (
          <>
            <DiscountPrice>{formatCurrency(price)}</DiscountPrice>
            <Price>{formatCurrency(formatPercent(price, discount))}</Price>
          </>
        ) : (
          <Price>{formatCurrency(price)}</Price>
        )}
      </ItemPrice>
      <ItemNumberColumn>{number}</ItemNumberColumn>
      <ItemTotalPriceColumn>
        {formatCurrency(formatPercent(price, discount) * number)}
      </ItemTotalPriceColumn>
    </OrderTableRow>
  );
};

export default OrderTableItem;
