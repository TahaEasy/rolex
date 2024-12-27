import styled from "styled-components";
import { lg, xs } from "../../styles/GlobalStyles";
import { formatCurrency } from "../../utils/helper";
import {
  LuArrowRightLeft,
  LuEye,
  LuHeart,
  LuShoppingBag,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import { useCreateCartItem } from "../cart/useCreateCartItem";
import Spinner from "../../ui/Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { addWishlistItem } from "../wishlist/wishlistSlice";
import { useCreateWishlistItem } from "../wishlist/useCreateWishlistItem";
import WatchView from "./WatchView";

const StyledTableItem = styled(Link)`
  margin: 1rem 0.5rem;
  text-decoration: none;
  color: var(--color-white);
  border-radius: 5px;
  overflow: hidden;

  &:hover .image-container {
    background: linear-gradient(
      to bottom,
      var(--color-secondary),
      var(--color-dark)
    );
  }
  &:hover .make-white {
    opacity: 1;
    color: var(--color-white);
  }
  &:hover .action-button {
    left: 6px;
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  background: var(--color-dark);
  overflow: hidden;

  & .svg {
    fill: var(--color-white);
  }

  @media ${xs} {
    padding: 2rem 0;
  }
`;

const Img = styled(LazyLoadImage)`
  width: 100px;
  scale: 2;

  @media ${xs} {
    width: 175px;
    scale: 1.25;
  }
  @media ${lg} {
    width: 200px;
    scale: 1.25;
  }
`;

const DetailContainer = styled.div`
  height: 100%;
  background-color: var(--color-dark-label);
  padding: 0.5rem 0.5rem;
`;

const ItemName = styled.p`
  margin: 0;
  color: var(--color-p);
  transition: all 0.5s;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: all 0.5s;
`;

const ActionButton = styled.button.attrs({ className: "action-button" })`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: var(--color-white);
  position: absolute;
  top: ${({ top }) => top}rem;
  left: -2rem;
  cursor: pointer;
  transition: all ${({ duration }) => duration}s, background-color 0.25s,
    color 0.25s;
  z-index: 50;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

const Discount = styled.span`
  position: absolute;
  top: 12px;
  right: 0;
  padding: 2px 5px;
  font-size: 0.7rem;
  font-weight: 800;
  background-color: var(--color-success);

  &::after,
  &::before {
    position: absolute;
    left: -14px;
    width: 15px;
    height: 15px;
    content: "";
    background-color: var(--color-success);
  }

  &::after {
    top: 0;
    clip-path: polygon(0 0, 100% 100%, 100% 100%, 100% 0);
  }
  &::before {
    bottom: 0;
    clip-path: polygon(0 100%, 100% 0, 100% 100%, 100% 100%);
  }
`;

const Brand = styled.div`
  & span:nth-child(1) {
    color: var(--color-secondary);
  }
  & span:nth-child(2) {
    color: var(--color-wheat);
  }
`;

const TableItem = ({ item, isUser }) => {
  const { name, image, price, discount, id, brands: { brandName } = {} } = item;

  const { createCartItem, isLoading: isCreatingCartItem } = useCreateCartItem();
  const { createWishlistItem, isLoading: isCreatingWishlistItem } =
    useCreateWishlistItem();
  const dispatch = useDispatch();

  const randomNumber = (Math.random() * 10).toFixed();

  return (
    <StyledTableItem to="/">
      <ImageContainer className="image-container">
        {discount !== 0 && <Discount>تخفیف {discount}%</Discount>}
        <ActionButton
          top={0.5}
          duration={0.25}
          onClick={() => {
            isUser
              ? createCartItem({ watchId: id })
              : dispatch(addItem({ item }));
          }}
        >
          {isCreatingCartItem ? (
            <Spinner size={20} color="var(--color-secondary)" />
          ) : (
            <LuShoppingBag />
          )}
        </ActionButton>
        <ActionButton
          top={3}
          duration={0.5}
          onClick={() => {
            isUser ? createWishlistItem(id) : dispatch(addWishlistItem(item));
          }}
        >
          {isCreatingWishlistItem ? (
            <Spinner size={20} color="var(--color-secondary)" />
          ) : (
            <LuHeart />
          )}
        </ActionButton>
        <WatchView
          ActionButton={
            <ActionButton top={5.5} duration={0.75}>
              <LuEye />
            </ActionButton>
          }
          item={item}
          isUser={isUser}
        />
        <Img
          src={image}
          placeholderSrc={`/images/placeholder-watches/${randomNumber}.svg`}
        />
      </ImageContainer>
      <DetailContainer>
        <ItemName className="make-white">{name}</ItemName>
        <Brand className="make-white">
          <span>برند: </span>
          <span>{brandName ? brandName : "بدون برند"}</span>
        </Brand>
        <PriceContainer>
          <Price className="make-white">{formatCurrency(price)}</Price>
        </PriceContainer>
      </DetailContainer>
    </StyledTableItem>
  );
};

export default TableItem;
