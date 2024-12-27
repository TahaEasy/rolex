import styled from "styled-components";
import Slider from "../../ui/Slider";
import { xs } from "../../styles/GlobalStyles";
import { SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";
import SectionHeader from "../../ui/SectionHeader";
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
    src: "/images/categories/3.png",
    alt: "category 1",
    heading: "ساعت زنگ دار",
    description: "ساعت های هشدار دهنده با بهترین صداها!",
  },
  {
    id: 2,
    src: "/images/categories/4.png",
    alt: "category 2",
    heading: "ساعت شماره گیر",
    description: "ساعت های هوشمند با قابلیت تماس گیری!",
  },
  {
    id: 3,
    src: "/images/categories/3.png",
    alt: "category 3",
    heading: "ساعت آنالوگ",
    description: "ساعت های عقربه دار جدید و کلاسیک!",
  },
  {
    id: 4,
    src: "/images/categories/2.png",
    alt: "category 4",
    heading: "بند ساعت",
    description: "زیبا ترین قسمت هر ساعت بند آن است!",
  },
  {
    id: 5,
    src: "/images/categories/1.png",
    alt: "category 2",
    heading: "ساعت شماره گیر",
    description: "ساعت های هوشمند با قابلیت تماس گیری!",
  },
  {
    id: 6,
    src: "/images/categories/4.png",
    alt: "category 4",
    heading: "بند ساعت",
    description: "زیبا ترین قسمت هر ساعت بند آن است!",
  },
];

const Categories = () => {
  return (
    <Container>
      <SectionHeader
        heading="خرید براساس دسته‌بندی ها"
        content="ما دسته‌های مختلفی را برای خواسته‌های مختلف شما ارائه می‌دهیم، اکنون با مراجعه به دسته‌ها مطابقت خود را پیدا کنید"
      />
      <SliderContainer>
        <Slider
          items={items}
          spaceBetween={15}
          breakpoints={{
            128: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            720: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          render={(item) => (
            <SwiperSlide key={item.id}>
              <CategoryItem item={item} />
            </SwiperSlide>
          )}
        />
      </SliderContainer>
    </Container>
  );
};

export default Categories;
