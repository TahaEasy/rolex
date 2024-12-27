import styled, { css } from "styled-components";
import Container from "../../ui/Container";
import { formatCurrency } from "../../utils/helper";
import { lg } from "../../styles/GlobalStyles";

const StyledExhibit = styled.div`
  margin: 1rem 0;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: url(/images/banners/sub-banner3.jpg);
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 800px) {
    justify-content: left;
  }

  @media ${lg} {
    padding: 4rem 2rem;
  }

  @media (min-width: 1350px) {
    padding: 4rem;
    background-position: center;
  }
`;

const P = styled.p`
  color: var(--color-p);
  margin: 0;
  font-size: 0.9rem;
  font-weight: 700;
`;

const PContent = styled(P)`
  max-width: 20rem;
`;

const PDivider = styled(P)`
  position: relative;
  margin: 0.5rem 0 1rem;
  height: 2rem;

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    border-bottom: 1px solid var(--color-p);
    width: 5rem;
  }
`;

const Heading = styled.h1`
  margin: 0;

  ${({ as }) =>
    as === "h1" &&
    css`
      font-size: 2rem;
      background: linear-gradient(
        to right,
        var(--color-primary),
        var(--color-white),
        var(--color-primary)
      );
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    `}
  ${({ as }) =>
    as === "h3" &&
    css`
      font-size: 1.25rem;
      margin-bottom: 1rem;
    `}
`;

const Percentage = styled.span`
  color: var(--color-primary);
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Img = styled.img`
  display: none;

  @media (min-width: 800px) {
    display: block;
    width: 20rem;
    position: absolute;
    bottom: 0;
    right: 2rem;
  }

  @media ${lg} {
    width: 25rem;
    right: 4rem;
  }

  @media (min-width: 1205px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

const WatchExhibit = () => {
  return (
    <StyledExhibit>
      <Container>
        <MainContainer>
          <ContentContainer>
            <P>پیشنهاد ویژه</P>
            <Heading as="h1">فروش لوکس</Heading>
            <PDivider>فروش ممتاز</PDivider>
            <Heading as="h3">
              تخفیف <Percentage>تا 80%</Percentage>
            </Heading>
            <PContent>
              یک پیشنهاد فوق العاده برای خرید با تخفیف، از همین حالا تا 80%
              تخفیف برای خرید های بالای {formatCurrency(450000)}، پس قبل از
              اینکه دیر شوید دست به کار شوید!
            </PContent>
          </ContentContainer>
          <Img src="/images/banners/sub-banner3-1.png" />
        </MainContainer>
      </Container>
    </StyledExhibit>
  );
};

export default WatchExhibit;
