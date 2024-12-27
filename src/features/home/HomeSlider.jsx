import styled from "styled-components";
import FlexRow from "../../ui/FlexRow";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { lg, md, xs, xxs } from "../../styles/GlobalStyles";

const StyledHomeSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/images/banners/banner1.jpg);
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    padding-top: calc(180px + (790 - 180) * ((100vw - 320px) / (1920 - 320)));
  }

  @media ${md} {
    background-position: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${xxs} {
    display: block;
  }
`;

const HeaderHeading = styled.h1`
  width: 5rem;
  margin: 0;
  font-size: 1rem;
  @media (min-width: 376px) {
    width: 10rem;
    font-size: 2rem;
  }
  @media ${md} {
    width: 15rem;
    font-size: 3rem;
    font-weight: 600;
  }
`;

const Main = styled.div`
  position: inherit;
  transform: none;
  margin-top: 1rem;

  @media ${xxs} {
    margin-top: 0;
    text-align: center;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-45%);
  }
  @media ${xs} {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

const Img1 = styled.img`
  display: none;
  position: absolute;
  max-height: 20rem;
  max-width: 45%;
  right: 0;
  bottom: 0;
  @media ${xs} {
    display: block;
    max-height: 30rem;
  }
  @media ${md} {
    max-height: 40rem;
  }
`;
const Img2 = styled.img`
  position: inherit;
  max-height: 25rem;
  max-width: 28%;
  padding-top: 1rem;

  @media ${xxs} {
    position: absolute;
    max-height: 25rem;
    max-width: 28%;
    left: 5%;
    bottom: 0;
    padding-top: 0;
  }
  @media (min-width: 376px) {
    left: 7%;
  }
  @media ${lg} {
    max-height: 35rem;
  }
`;

const Image2Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Divider = styled.span`
  display: inline-block;
  background-color: var(--color-primary);
  margin: 0 1rem;
  height: 1px;
  width: 2.5rem;
  opacity: 0.8;
`;

const Content = styled.p`
  display: none;
  font-weight: 500;
  margin: 0 auto;
  max-width: 60%;
  font-size: 16px;
  line-height: 29px;
  color: var(--color-white);
  opacity: 0.7;
  margin-bottom: 36px;

  @media ${lg} {
    display: block;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 376px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const HomeSlider = () => {
  return (
    <StyledHomeSlider>
      <Container>
        <Img1 src="/images/banners/banner1-1.png" />
        <Main>
          <FlexRow justify="center" align="center">
            <Divider />
            <Heading as="h4">تا 50% تخفیف</Heading>
            <Divider />
          </FlexRow>
          <FlexRow justify="center">
            <HeaderHeading>ظرافت یک نگرش است</HeaderHeading>
          </FlexRow>
          <Content>
            ما خوشحالیم که جدیدترین مجموعه ساعت خود را معرفی می کنیم، آنها در
            اندازه ها و رنگ های مختلف هستند و همه دارای پشتی از جنس استیل ضد زنگ
            هستند
          </Content>
          <ButtonContainer>
            <Button>اکنون سفارش دهید</Button>
          </ButtonContainer>
        </Main>
        <Image2Container>
          <Img2 src="/images/banners/banner1-2.png" />
        </Image2Container>
      </Container>
    </StyledHomeSlider>
  );
};

export default HomeSlider;
