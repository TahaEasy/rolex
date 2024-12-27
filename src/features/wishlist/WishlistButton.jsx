import { LuHeart } from "react-icons/lu";
import ButtonIcon from "../../ui/ButtonIcon";
import WishlistLayout from "./WishlistLayout";
import { useEffect, useState } from "react";
import Modal from "../../ui/Modal";
import ButtonBox from "../../ui/ButtonBox";

const WishlistButton = ({ wishlist }) => {
  const wishlistLength = wishlist.length;
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
            <ButtonIcon icon={<LuHeart />} tagContent={wishlistLength} />
          </Modal.Open>
          <Modal.Window name="auth">
            <Modal.HeadingContainer>
              <Modal.Heading>لیست علاقه مندی</Modal.Heading>
              {wishlistLength ? (
                <Modal.Sup>تعداد: {wishlistLength}</Modal.Sup>
              ) : null}
            </Modal.HeadingContainer>
            <WishlistLayout wishlist={wishlist} />
          </Modal.Window>
        </Modal>
      ) : (
        <ButtonIcon
          icon={<LuHeart />}
          boxContent={
            <>
              <WishlistLayout wishlist={wishlist} />
              <ButtonBox to="/wishlist">لیست علاقه مندی</ButtonBox>
            </>
          }
          boxHeading="لیست علاقه مندی"
          boxSup={`تعداد: ${wishlistLength}`}
          tagContent={wishlistLength}
        />
      )}
    </>
  );
};

export default WishlistButton;
