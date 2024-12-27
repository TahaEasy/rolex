import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sizes = {
  sm: "4rem;",
  md: "7rem",
  lg: "10rem",
};

const Img = styled.img`
  height: ${(props) => sizes[props.size]};
  width: auto;
`;
const Logo = ({ size = "sm" }) => {
  return (
    <StyledLogo>
      <Img src="/logo-2.png" alt="Logo" size={size} />
    </StyledLogo>
  );
};

export default Logo;
