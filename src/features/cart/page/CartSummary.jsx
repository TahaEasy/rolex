import styled from "styled-components";
import { formatCurrency, formatPercentCurrency } from "../../../utils/helper";
import ButtonBox from "../../../ui/ButtonBox";
import ButtonNormal from "../../../ui/ButtonNormal";
import { lg } from "../../../styles/GlobalStyles";
import { useIsUser } from "../../../hooks/useIsUser";
import toast from "react-hot-toast";
import { useCreateOrder } from "./useCreateOrder";
import Spinner from "../../../ui/Spinner";

const StyledCartSummary = styled.div`
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

const CartSummary = ({ cart }) => {
  const isUser = useIsUser();
  const totalNormalPrice = cart.reduce(
    (acc, curr) => acc + curr.watches.price * curr.number,
    0
  );
  const totalNumber = cart.reduce((acc, curr) => acc + curr.number, 0);
  const totalDiscount = cart.reduce(
    (acc, curr) =>
      acc +
      formatPercentCurrency(curr.watches.price, curr.watches.discount) *
        curr.number,
    0
  );

  const totalPrice = totalNormalPrice - totalDiscount + 50000;

  const { order, isLoading } = useCreateOrder();

  return (
    <StyledCartSummary>
      <BoxContainer>
        <Heading>جزئیات سبد ({totalNumber} مورد)</Heading>
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
          <ButtonBox
            onClick={() => {
              isUser
                ? order(cart)
                : toast.error("برای ثبت سفارش باید حساب کاربری داشته باشید!");
            }}
          >
            {isLoading ? (
              <Spinner size={40} color="var(--color-white)" />
            ) : (
              "سفارش بده!"
            )}
          </ButtonBox>
          <ButtonNormal to="/">بازگشت</ButtonNormal>
        </ActionButtonsContainer>
      </BoxContainer>
    </StyledCartSummary>
  );
};

export default CartSummary;
