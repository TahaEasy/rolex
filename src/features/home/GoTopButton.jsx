import { useEffect, useState } from "react";
import { LuChevronsUp, LuUpload } from "react-icons/lu";
import styled from "styled-components";
import { useUpload } from "../../data/useUpload";
import Spinner from "../../ui/Spinner";

const GoTopBtn = styled.button`
  opacity: ${({ isActive }) => (isActive === "true" ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive === "true" ? "visible" : "hidden")};
  position: fixed;
  bottom: ${({ isActive }) => (isActive === "true" ? "1rem" : "-2rem")};
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 100rem;
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  z-index: 100;
  transition: all 0.25s;

  &:hover {
    bottom: 1.25rem;
    background-color: var(--color-white);
    color: var(--color-primary);
  }
`;

const UploadBtn = styled(GoTopBtn)`
  left: 5rem;

  & svg {
    font-size: x-large;
  }
`;

const GoTopButton = () => {
  const { upload, isLoading: isUploading } = useUpload();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const s = document.documentElement.scrollTop;
      if (s >= 550) setIsActive(true);
      if (s < 550) setIsActive(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <GoTopBtn onClick={goTop} isActive={isActive ? "true" : "false"}>
        <LuChevronsUp />
      </GoTopBtn>
      {/* <UploadBtn onClick={upload} disabled={isUploading}>
        {isUploading ? <Spinner size={20} /> : <LuUpload />}
      </UploadBtn> */}
    </>
  );
};

export default GoTopButton;
