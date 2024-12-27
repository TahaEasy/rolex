import styled from "styled-components";
import Modal from "../../ui/Modal";
import { formatCurrency, formatPercent } from "../../utils/helper";
import { useState } from "react";
import { LuHeart, LuMinus, LuPlus } from "react-icons/lu";
import ButtonBox from "../../ui/ButtonBox";
import ButtonNormal from "../../ui/ButtonNormal";
import { addWishlistItem } from "../wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
import { useCreateCartItem } from "../cart/useCreateCartItem";
import { addItem } from "../cart/cartSlice";
import Spinner from "../../ui/Spinner";
import { useCreateWishlistItem } from "../wishlist/useCreateWishlistItem";

const OverAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 30rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none !important;
  }

  @media (min-width: 900px) {
    max-height: 35rem;
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  background-color: var(--color-dark);
  border-radius: 1rem;
`;

const Img = styled.img`
  width: 13rem;
  transition: all 0.25s;

  @media (min-width: 560px) {
    width: 30rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 20rem;
  margin-right: 0;

  @media (min-width: 900px) {
    margin-right: 1rem;
  }
`;

const Details = styled.div``;

const DetailRow = styled.div`
  margin: 4px 0;
`;

const Name = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Price = styled.span`
  color: var(--color-primary);
  margin: 0;
  font-size: 0.8rem;
  margin: 0 2px;
`;

const DiscountPrice = styled.span`
  color: var(--color-gray-500);
  margin: 0;
  text-decoration: line-through;
  margin: 0 2px;
`;

const Title = styled.p`
  margin: 0;
  font-weight: 600;
`;

const Content = styled.p`
  color: var(--color-p);
  font-size: 0.85rem;
  margin: 0;
`;

const Brand = styled.p`
  color: var(--color-wheat);
  margin: 0;
`;

const StyledItemNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: min-content;
  margin: 0.25rem 0;
  background-color: var(--color-dark);
  border: 1px var(--color-gray) solid;
  border-radius: 5px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  & svg {
    color: var(--color-primary);
  }
`;

const Number = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  font-size: 1.25rem;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  & :nth-child(1) {
    margin-bottom: 4px;
  }
`;

const AddWishlistButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: var(--color-white);
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: all 0.5s, background-color 0.25s, color 0.25s;
  z-index: 50;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

const WatchView = ({ item, isUser, ActionButton }) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  const { createCartItem, isLoading: isCreatingCartItem } = useCreateCartItem();
  const { createWishlistItem, isLoading: isCreatingWishlistItem } =
    useCreateWishlistItem();

  const {
    id,
    name,
    description,
    image,
    discount,
    price,
    brands: { brandName },
  } = item;
  return (
    <Modal>
      <Modal.Open open="watchview">{ActionButton}</Modal.Open>
      <Modal.Window name="watchview" width="max-content">
        <OverAll>
          <ImgContainer>
            <AddWishlistButton
              onClick={() => {
                isUser
                  ? createWishlistItem(id)
                  : dispatch(addWishlistItem(item));
              }}
            >
              {isCreatingWishlistItem ? (
                <Spinner size={20} color="var(--color-secondary)" />
              ) : (
                <LuHeart />
              )}
            </AddWishlistButton>
            <Img src={image} />
          </ImgContainer>
          <DetailsContainer>
            <Details>
              <Name>{name}</Name>
              <DetailRow>
                <Title>قیمت:</Title>
                {discount ? (
                  <>
                    <DiscountPrice>{formatCurrency(price)}</DiscountPrice>
                    <Price>
                      {formatCurrency(formatPercent(price, discount))}
                    </Price>
                  </>
                ) : (
                  <Price>{formatCurrency(price)}</Price>
                )}
              </DetailRow>
              <DetailRow>
                <Title>شرح ساعت:</Title>
                <Content>{description}</Content>
              </DetailRow>
              <DetailRow>
                <Title>برند ساعت:</Title>
                <Brand>{brandName}</Brand>
              </DetailRow>
              <DetailRow>
                <Title>تعداد:</Title>
                <StyledItemNumber>
                  <Button
                    onClick={() => {
                      setNumber((num) => num + 1);
                    }}
                  >
                    <LuPlus />
                  </Button>
                  <Number>{number}</Number>
                  <Button
                    onClick={() => {
                      if (number - 1 !== 0) {
                        setNumber((num) => num - 1);
                      }
                    }}
                  >
                    <LuMinus />
                  </Button>
                </StyledItemNumber>
              </DetailRow>
              <ActionButtonsContainer>
                <ButtonBox
                  onClick={() => {
                    isUser
                      ? createCartItem({ watchId: id, number })
                      : dispatch(addItem({ item, number }));
                  }}
                >
                  {isCreatingCartItem ? (
                    <Spinner size={40} color="var(--color-white)" />
                  ) : (
                    "افزودن به سبد خرید"
                  )}
                </ButtonBox>
                <Modal.CustomClose>
                  <ButtonNormal>بازگشت</ButtonNormal>
                </Modal.CustomClose>
              </ActionButtonsContainer>
            </Details>
          </DetailsContainer>
        </OverAll>
      </Modal.Window>
    </Modal>
  );
};

export default WatchView;
