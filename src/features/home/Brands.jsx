import styled from "styled-components";
import Slider from "../../ui/Slider";
import { xs } from "../../styles/GlobalStyles";
import { SwiperSlide } from "swiper/react";
import BrandItem from "./BrandItem";
import Container from "../../ui/Container";

const SliderContainer = styled.div`
  margin: 0;

  @media ${xs} {
    margin: 2rem 0;
  }
`;

const items = [
  {
    id: 1,
    src: "/images/brands/1.png",
    alt: "brand 1",
  },
  {
    id: 2,
    src: "/images/brands/2.png",
    alt: "brand 2",
  },
  {
    id: 3,
    src: "/images/brands/7.png",
    alt: "brand 7",
  },
  {
    id: 4,
    src: "/images/brands/3.png",
    alt: "brand 3",
  },
  {
    id: 5,
    src: "/images/brands/4.png",
    alt: "brand 4",
  },
  {
    id: 6,
    src: "/images/brands/5.png",
    alt: "brand 5",
  },
  {
    id: 7,
    src: "/images/brands/6.png",
    alt: "brand 6",
  },
];

const Brands = () => {
  return (
    <SliderContainer>
      <Container>
        <Slider
          items={items}
          breakpoints={{
            128: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 5,
            },
            720: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          render={(item) => (
            <SwiperSlide
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <BrandItem src={item.src} alt={item.alt} />
            </SwiperSlide>
          )}
        />
      </Container>
    </SliderContainer>
  );
};

export default Brands;
