import styled from "styled-components";
import { xl } from "../styles/GlobalStyles";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${xl} {
    flex-direction: row;
    align-items: end;
  }
`;

const ContentContainer = styled.div`
  max-width: none;
  text-align: center;

  @media ${xl} {
    max-width: 37rem;
    text-align: right;
  }
`;

const Heading = styled.h1`
  display: inline-block;
  margin: 0;
  position: relative;
  color: var(--color-primary);
  font-size: 1.85rem;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 35%;
    width: 100%;
    opacity: 0.1;
    background-color: var(--color-primary);
  }

  @media ${xl} {
    text-align: right;
  }
`;

const Content = styled.p`
  font-weight: 500;
`;

const OtherContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media ${xl} {
    justify-content: left;
    width: auto;
  }
`;

const SectionHeader = ({ heading, content, children }) => {
  return (
    <Header>
      <ContentContainer>
        <Heading>{heading}</Heading>
        <Content>{content}</Content>
      </ContentContainer>
      <OtherContainer>{children}</OtherContainer>
    </Header>
  );
};

export default SectionHeader;
