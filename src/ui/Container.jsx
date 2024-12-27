import styled from "styled-components";
import { lg, md, sm, xl, xs, xxs, xxxs, xxxxs } from "../styles/GlobalStyles";

const HelperDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledContainer = styled.div`
  position: relative;
  width: 90%;

  @media ${xs} {
    max-width: 500px;
  }
  @media ${sm} {
    max-width: 640px;
  }
  @media ${md} {
    max-width: 720px;
  }
  @media ${lg} {
    max-width: 1300px;
  }
  @media ${xl} {
    max-width: 1500px;
  }
`;

const Container = ({ children }) => {
  return (
    <HelperDiv>
      <StyledContainer className="not">{children}</StyledContainer>
    </HelperDiv>
  );
};

export default Container;
