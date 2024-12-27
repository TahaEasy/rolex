import { LuShoppingBag } from "react-icons/lu";
import ButtonIcon from "../../ui/ButtonIcon";
import CartLayout from "./CartLayout";
import Modal from "../../ui/Modal";
import { useEffect, useState } from "react";
import ButtonBox from "../../ui/ButtonBox";

const CartButton = ({ cart }) => {
  const cartLength = cart.length;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      if (document.documentElement.scrollWidth > 475) {
        if (showModal) {
          setShowModal(false);
        }
      } else {
        if (!showModal) {
          setShowModal(true);
        }
      }
    };
    if (document.documentElement.scrollWidth > 475) {
      if (showModal) {
        setShowModal(false);
      }
    } else {
      if (!showModal) {
        setShowModal(true);
      }
    }

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <Modal>
          <Modal.Open open="auth">
            <ButtonIcon icon={<LuShoppingBag />} tagContent={cartLength} />
          </Modal.Open>
          <Modal.Window name="auth">
            <Modal.HeadingContainer>
              <Modal.Heading>سبد خرید</Modal.Heading>
              {cartLength ? <Modal.Sup>تعداد: {cartLength}</Modal.Sup> : null}
            </Modal.HeadingContainer>
            <CartLayout cart={cart} />
            <Modal.CustomClose>
              <ButtonBox to="/cart">سبد خرید</ButtonBox>
            </Modal.CustomClose>
          </Modal.Window>
        </Modal>
      ) : (
        <ButtonIcon
          icon={<LuShoppingBag />}
          boxContent={
            <>
              <CartLayout cart={cart} />
              <ButtonBox to="/cart">سبد خرید</ButtonBox>
            </>
          }
          boxHeading="سبد خرید"
          boxSup={`تعداد: ${cartLength}`}
          tagContent={cartLength}
        />
      )}
    </>
  );
};

export default CartButton;
