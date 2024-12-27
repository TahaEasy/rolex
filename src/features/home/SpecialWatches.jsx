import styled from "styled-components";
import Container from "../../ui/Container";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 576px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SpecialWatch = styled(Link)`
  display: block;
  margin: 0.5rem;
`;

const SpecialWatchImg = styled.img`
  height: 100%;
  width: 100%;
  transition: all 0.25s;

  &:hover {
    filter: brightness(50%);
  }
`;

const BigSpecialWatch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-end: span 2;
  margin: 0.5rem;
  padding: 2rem 0;
  background: url(${({ src }) => src});
  background-position: center;
  background-size: cover;

  @media (min-width: 576px) {
    padding: 0;
  }
`;

const TextCenter = styled.div`
  text-align: center;
`;

const P = styled.p`
  color: var(--color-primary);
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.25rem;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 0.85rem;
  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;

const StyledButton = styled(Button)`
  display: inline-block;
  margin-top: 1rem;
`;

const SpecialWatches = () => {
  return (
    <Container>
      <StyledContainer>
        <SpecialWatch to="/">
          <SpecialWatchImg src="/images/special-watches/1.jpg" />
        </SpecialWatch>
        <SpecialWatch to="/">
          <SpecialWatchImg src="/images/special-watches/2.jpg" />
        </SpecialWatch>
        <BigSpecialWatch src="/images/special-watches/3.jpg">
          <TextCenter>
            <P>راحتی را احساس کنید</P>
            <Heading>ساعت های عقربه دار زیبا</Heading>
            <StyledButton type="sm">مشاهده همه</StyledButton>
          </TextCenter>
        </BigSpecialWatch>
        <BigSpecialWatch src="/images/special-watches/4.jpg">
          <TextCenter>
            <P>راحتی را احساس کنید</P>
            <Heading>ساعت های عقربه دار زیبا</Heading>
            <StyledButton type="sm">مشاهده همه</StyledButton>
          </TextCenter>
        </BigSpecialWatch>
        <SpecialWatch to="/">
          <SpecialWatchImg src="/images/special-watches/5.jpg" />
        </SpecialWatch>
        <SpecialWatch to="/">
          <SpecialWatchImg src="/images/special-watches/6.jpg" />
        </SpecialWatch>
      </StyledContainer>
    </Container>
  );
};

export default SpecialWatches;
