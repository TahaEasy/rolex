import { useDispatch, useSelector } from "react-redux";
import CartButton from "./CartButton";
import { useCart } from "./useCart";
import { clearCart } from "./cartSlice";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;

const Carter = () => {
  const pervCart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  const { cart = [], isLoading } = useCart(pervCart, true);

  useEffect(() => {
    if (pervCart) {
      dispatch(clearCart());
    }
  }, []);

  if (isLoading)
    return (
      <Loading>
        <Spinner size={20} />
      </Loading>
    );

  return <CartButton cart={cart} />;
};

export default Carter;
