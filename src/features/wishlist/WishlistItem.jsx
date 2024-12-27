import { useDispatch } from "react-redux";

import { LuX } from "react-icons/lu";

import { formatCurrency, formatPercent } from "../../utils/helper";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import { useDeleteWishlistItem } from "./useDeleteWishItem";
import { removeWishlistItem } from "./wishlistSlice";
import { useAddToCart } from "./useAddToCart";
import { addItem } from "../cart/cartSlice";

const StyledWishlistItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.75rem 0;
  padding: 0.5rem 0;
  background-color: var(--color-dark);
  border-radius: 5px;
  width: max-content;
  max-width: 17rem;

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

const AddToCartBtnContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 5px;
`;

const AddToCartBtn = styled.button`
  font-family: "Tanha";
  text-align: start;
  border: none;
  border-radius: 3px;
  margin-left: 5px;
  color: var(--color-white);
  background-color: var(--color-secondary);
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: var(--color-primary);
  }
  &:disabled {
    background-color: var(--color-dark-secondary-label);
    pointer-events: none;
  }
`;

const BtnClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  color: var(--color-white);
  cursor: pointer;
`;

const WishlistItem = ({ watch, isUser }) => {
  const dispatch = useDispatch();

  const { deleteWishlistItem, isLoading: isDeleting } = useDeleteWishlistItem();
  const { addToCart, isAddingToCart } = useAddToCart();

  return (
    <StyledWishlistItem>
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
        <AddToCartBtnContainer>
          <AddToCartBtn
            onClick={() => {
              if (isUser) {
                addToCart({ watchId: watch.id });
              } else {
                dispatch(addItem({ item: watch }));
                dispatch(removeWishlistItem(watch.id));
              }
            }}
            disabled={isAddingToCart}
          >
            افزودن به سبد
          </AddToCartBtn>
          {isAddingToCart ? (
            <Spinner size={20} color="var(--color-secondary)" />
          ) : null}
        </AddToCartBtnContainer>
      </DetailsContainer>
      <BtnClose
        onClick={() => {
          isUser
            ? deleteWishlistItem(watch.id)
            : dispatch(removeWishlistItem(watch.id));
        }}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <Spinner size={20} color="var(--color-secondary)" />
        ) : (
          <LuX />
        )}
      </BtnClose>
    </StyledWishlistItem>
  );
};

export default WishlistItem;
