import { useDispatch } from "react-redux";

import { removeItem } from "./cartSlice";

import { LuX } from "react-icons/lu";
import ItemNumber from "./ItemNumber";

import { formatCurrency, formatPercent } from "../../utils/helper";
import { useDeleteCartItem } from "./useDeleteCartItem";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.75rem 0;
  padding: 0.5rem 0;
  background-color: var(--color-dark);
  border-radius: 5px;
  width: max-content;
  max-width: 15.5rem;

  @media (min-width: 353px) {
    max-width: 17rem;
  }
  @media (min-width: 475px) {
    background-color: var(--color-dark-label);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover img {
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  height: 7rem;
  width: 7rem;
  transition: all 0.25s;
`;

const DetailsContainer = styled.div`
  text-align: start;
`;

const Name = styled.p`
  font-size: 0.85rem;
  margin: 0;
  margin-left: 1rem;
`;
const Price = styled.p`
  color: var(--color-primary);
  margin: 0;
  font-size: 0.8rem;
`;

const DiscountPrice = styled.p`
  color: var(--color-gray-500);
  margin: 0;
  text-decoration: line-through;
`;

const BtnClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  color: var(--color-white);
  cursor: pointer;

  & svg {
    color: var(--color-primary);
  }
`;

const CartItem = ({ number, watch, isUser }) => {
  const dispatch = useDispatch();

  const { deleteCartItem, isLoading: isDeleting } = useDeleteCartItem();
  return (
    <StyledCartItem>
      <ImageContainer>
        <Img src={watch.image} />
      </ImageContainer>
      <DetailsContainer>
        <Name>{watch.name}</Name>
        {watch.discount !== 0 ? (
          <>
            <DiscountPrice>{formatCurrency(watch.price)}</DiscountPrice>
            <Price>
              {formatCurrency(formatPercent(watch.price, watch.discount))}
            </Price>
          </>
        ) : (
          <Price>{formatCurrency(watch.price)}</Price>
        )}
        <ItemNumber number={number} itemId={watch.id} isUser={isUser} />
      </DetailsContainer>
      <BtnClose
        onClick={() => {
          isUser ? deleteCartItem(watch.id) : dispatch(removeItem(watch.id));
        }}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <Spinner size={20} color="var(--color-secondary)" />
        ) : (
          <LuX />
        )}
      </BtnClose>
    </StyledCartItem>
  );
};

export default CartItem;
