import { cloneElement, useContext } from "react";
import { createContext, useState } from "react";
import { LuX } from "react-icons/lu";
import styled, { css, keyframes } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

export const ModalContext = createContext();

const Modal = ({ children }) => {
  const [modalName, setModalName] = useState("");

  const openModal = (name) => {
    setModalName(name);
  };

  const closeModal = () => setModalName("");

  return (
    <ModalContext.Provider value={{ modalName, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const fadein = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const fadeinBox = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    margin-bottom: 10rem;
  }
  100% {
    opacity: 1;
    visibility: visible;
    margin-bottom: 0;
  }
`;

const StyledWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 100dvh;
  width: 100%;
  background-color: rgba(var(--color-dark-rgb), 0.3);
  z-index: 9998;

  animation-name: ${fadein};
  animation-duration: 0.5s;
  animation-fill-mode: backwards;
`;

const Box = styled.div`
  position: relative;
  color: white;
  background: var(--color-dark-label);
  border-radius: 8px;
  padding: 1rem;
  margin: 4rem 30px 0 30px;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "max-content")};

  @media (min-width: 475px) {
    ${({ width }) =>
      width
        ? null
        : css`
            max-width: 25rem;
          `}
    margin: 4rem 0 0 0;
  }
  animation-name: ${fadeinBox};
  animation-duration: 0.5s;
  animation-delay: 0.25s;
  animation-fill-mode: backwards;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  background-color: var(--color-dark-label);
  border: none;
  border-radius: 999999px;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  transition: all 0.25s;

  & svg {
    transition: all 0.5s;
  }
  &:hover {
    box-shadow: 0px 0px 8px 1px var(--color-dark);
    & svg {
      transform: rotate(180deg);
    }
  }
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px var(--color-white) dashed;
  padding-bottom: 5px;
  margin-bottom: 1rem;
`;

const ModalHeading = styled.h2`
  margin: 0;
`;

const Sup = ({ children }) => {
  return <span>{children}</span>;
};

const Heading = ({ children }) => {
  return <ModalHeading>{children}</ModalHeading>;
};

const HeadingContainer = ({ children }) => {
  return <StyledHeadingContainer>{children}</StyledHeadingContainer>;
};

const Window = ({ name, width, height, children }) => {
  const { modalName, closeModal } = useContext(ModalContext);
  const ref = useOutsideClick(closeModal, true);

  if (name !== modalName) return;

  return createPortal(
    <StyledWindow>
      <Box ref={ref} width={width} height={height}>
        <Close />
        <Heading />
        <div>{children}</div>
      </Box>
    </StyledWindow>,
    document.body
  );
};

const Open = ({ open, children }) => {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(open) });
};

const Close = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <CloseButton onClick={closeModal}>
      <LuX />
    </CloseButton>
  );
};
const CustomClose = ({ children }) => {
  const { closeModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => closeModal() });
};

Modal.Window = Window;
Modal.Open = Open;
Modal.CustomClose = CustomClose;
Modal.HeadingContainer = HeadingContainer;
Modal.Heading = Heading;
Modal.Sup = Sup;

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("please use the context inside its provider!");
  }
  return context;
};

export default Modal;
