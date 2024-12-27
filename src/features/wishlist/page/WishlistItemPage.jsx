import styled from "styled-components";
import { formatCurrency, formatPercent } from "../../../utils/helper";
import ButtonNormal from "../../../ui/ButtonNormal";
import { LuX } from "react-icons/lu";
import { useAddToCart } from "../useAddToCart";
import { useDeleteWishlistItem } from "../useDeleteWishItem";
import { useDispatch } from "react-redux";
import { removeWishlistItem } from "../wishlistSlice";
import Spinner from "../../../ui/Spinner";
import { addItem } from "../../cart/cartSlice";

const StyledWishlistItem = styled.div`
  position: relative;
  margin: 8px;
  border: 1px solid var(--color-white);
  border-radius: 8px;
  overflow: hidden;

  &:hover .btn-close {
    opacity: 1;
    top: 8px;
  }

  &:hover img {
    scale: 1.1;
  }
`;

const BtnRemove = styled.button`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1rem;
  left: 8px;
  width: 2rem;
  height: 2rem;
  font-size: large;
  border-radius: 1rem;
  border: none;
  background-color: var(--color-white);
  cursor: pointer;
  transition: all 0.25s;
  z-index: 5;

  &:hover {
    background-color: var(--color-danger);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-dark-label);
`;

const Img = styled.img`
  width: 12rem;
  transition: all 0.25s;
`;

const DetailsContainer = styled.div`
  margin: 8px;
`;

const Name = styled.p`
  margin: 0;
  color: var(--color-white);
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

const WishlistItemPage = ({ item, isUser }) => {
  const dispatch = useDispatch();

  const { deleteWishlistItem, isLoading: isDeleting } = useDeleteWishlistItem();
  const { addToCart, isAddingToCart } = useAddToCart();

  const { id, name, image, price, discount } = item.watches;

  return (
    <StyledWishlistItem>
      <BtnRemove
        className="btn-close"
        onClick={() => {
          isUser ? deleteWishlistItem(id) : dispatch(removeWishlistItem(id));
        }}
        disabled={isDeleting}
      >
        {isDeleting ? <Spinner size={20} color="var(--color-dark)" /> : <LuX />}
      </BtnRemove>
      <ImgContainer>
        <Img src={image} alt={name} />
      </ImgContainer>
      <DetailsContainer>
        <Name>{name}</Name>
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
        <ButtonNormal
          onClick={() => {
            if (isUser) {
              addToCart(id);
            } else {
              dispatch(addItem({ item: item.watches }));
              dispatch(removeWishlistItem(id));
            }
          }}
          disabled={isAddingToCart}
        >
          {isAddingToCart ? (
            <Spinner size={26} color="var(--color-white)" />
          ) : (
            "افزودن به سبد"
          )}
        </ButtonNormal>
      </DetailsContainer>
    </StyledWishlistItem>
  );
};

export default WishlistItemPage;
