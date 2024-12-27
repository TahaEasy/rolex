import styled from "styled-components";
import { formatCurrency, formatPercent } from "../../utils/helper";
import { Link } from "react-router-dom";
import WatchView from "../watches/WatchView";

const StyledSearchItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 8px;
  border: 1px dashed var(--color-white);
  border-right-color: transparent;
  border-bottom-color: transparent;
  transition: all 0.25s;

  &:hover {
    border-color: transparent;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark-label);
  height: 100%;
`;

const Img = styled.img`
  width: 8rem;
  transition: all 0.25s;

  &:hover {
    scale: 1.1;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100%;
  margin: 8px;
`;

const Brand = styled.div`
  & span:nth-child(1) {
    color: var(--color-secondary);
  }
  & span:nth-child(2) {
    color: var(--color-wheat);
  }
`;

const ItemName = styled(Link)`
  margin: 0;
  color: var(--color-p);
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: var(--color-white);
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Price = styled.p`
  color: var(--color-primary);
  margin: 0;
`;

const DiscountPrice = styled.p`
  color: var(--color-gray-500);
  margin: 0;
  text-decoration: line-through;
  font-size: 0.8rem;
`;

const SearchItem = ({ item, isUser }) => {
  const {
    name,
    image,
    price,
    discount,
    brands: { brandName },
  } = item;

  return (
    <StyledSearchItem>
      <ImgContainer>
        <Img src={image} />
      </ImgContainer>
      <DetailContainer>
        <WatchView
          ActionButton={<ItemName>{name}</ItemName>}
          item={item}
          isUser={isUser}
        ></WatchView>
        <PriceContainer>
          {discount ? (
            <>
              <DiscountPrice>{formatCurrency(price)}</DiscountPrice>
              <Price>{formatCurrency(formatPercent(price, discount))}</Price>
            </>
          ) : (
            <Price>{formatCurrency(price)}</Price>
          )}
        </PriceContainer>
        <Brand>
          <span>برند:</span>
          <span>{brandName}</span>
        </Brand>
      </DetailContainer>
    </StyledSearchItem>
  );
};

export default SearchItem;
