import styled from "styled-components";
import { md } from "../../styles/GlobalStyles";
import { Link } from "react-router-dom";
const StyledItem = styled(Link)`
  display: inline-block;
  margin: 1rem 10px;

  width: 90%;
  height: 50px;
  font-size: 33px;
  border-radius: 0.75rem;
  background: var(--color-dark-label);
  cursor: pointer;

  &:hover {
    background: url(/images/brands/bg-brand.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 15px -3px var(--color-white);
  }

  @media ${md} {
    height: 83px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  & img {
    user-select: none;
    width: 75%;

    @media ${md} {
      width: 100%;
    }
  }
`;

const BrandItem = ({ src, alt }) => {
  return (
    <StyledItem to="/">
      <ImageContainer>
        <img src={src} alt={alt} />
      </ImageContainer>
    </StyledItem>
  );
};

export default BrandItem;
