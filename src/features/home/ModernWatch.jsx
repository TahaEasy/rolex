import styled from "styled-components";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

const MainContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 1rem 2rem;
  background-color: var(--color-dark-label);

  @media (min-width: 576px) {
    text-align: right;
  }
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const P = styled.p`
  color: var(--color-p);
  font-size: 0.9rem;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const ModernWatch = () => {
  return (
    <Container>
      <MainContainer>
        <Content>
          <Heading>ساعت هوشمند زندگی شما را آسان‌تر و سریع‌تر می‌کند</Heading>
          <P>
            بهترین مجموعه ساعت‌های هوشمند که زندگی شما را آسان‌تر می‌کند، برندها
            و انواع مختلفی از ساعت‌ها برای شما در دسترس هستند. دارای ویژگی های
            مختلفی مانند تماس، هدفون، لرزش و غیره
          </P>
          <Button>بیشتر کاوش کنید</Button>
        </Content>
        <ImageContainer>
          <Image src="/images/banners/sub-banner.jpg" />
        </ImageContainer>
      </MainContainer>
    </Container>
  );
};

export default ModernWatch;
