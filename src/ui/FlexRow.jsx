import styled from "styled-components";

const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

const FlexRow = ({
  children,
  direction = "row",
  justify = "space-between",
  align = "center",
  className = "",
}) => {
  return (
    <StyledFlexRow
      direction={direction}
      justify={justify}
      align={align}
      className={className}
    >
      {children}
    </StyledFlexRow>
  );
};

export default FlexRow;
