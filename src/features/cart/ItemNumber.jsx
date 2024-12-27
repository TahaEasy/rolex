import { useDispatch } from "react-redux";
// import { decreaseItemNumber, increaseItemNumber } from "./cartSlice";

import { LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";

import styled from "styled-components";
import { useIncItemNum } from "./useIncCartItemNum";
import { useDecItemNum } from "./useDecCartItemNum";
import Spinner from "../../ui/Spinner";
import {
  decreaseItemNumber,
  increaseItemNumber,
  removeItem,
} from "./cartSlice";
import { useDeleteCartItem } from "./useDeleteCartItem";

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
  background: transparent;
  border: none;
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
  font-size: 0.85rem;
`;

const ItemNumber = ({ number, itemId, isUser, withDelete = false }) => {
  const dispatch = useDispatch();

  const { incCartItemNum, isLoading: inLoading } = useIncItemNum();
  const { decCartItemNum, isLoading: decLoading } = useDecItemNum();

  const { deleteCartItem, isLoading: isDeleting } = useDeleteCartItem();

  const isLoading = inLoading || decLoading;

  return (
    <StyledItemNumber>
      <Button
        onClick={() => {
          isUser
            ? incCartItemNum(itemId)
            : dispatch(increaseItemNumber(itemId));
        }}
        disabled={isLoading || isDeleting}
      >
        <LuPlus />
      </Button>
      <Number>{isLoading ? <Spinner size={20} /> : number}</Number>
      <Button
        onClick={() => {
          if (number - 1 !== 0) {
            isUser
              ? decCartItemNum(itemId)
              : dispatch(decreaseItemNumber(itemId));
          } else {
            if (withDelete) {
              isUser ? deleteCartItem(itemId) : dispatch(removeItem(itemId));
            }
          }
        }}
        disabled={isLoading || isDeleting}
      >
        {withDelete ? (
          number - 1 === 0 ? (
            isDeleting ? (
              <Spinner size={10} />
            ) : (
              <LuTrash2 />
            )
          ) : (
            <LuMinus />
          )
        ) : (
          <LuMinus />
        )}
      </Button>
    </StyledItemNumber>
  );
};

export default ItemNumber;
