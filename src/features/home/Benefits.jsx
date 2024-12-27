import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../../ui/Slider";
import { EffectCards, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import styled from "styled-components";

import BenefitItem from "./BenefitItem";
import { formatCurrency } from "../../utils/helper";
import Container from "../../ui/Container";

import { LuTruck } from "react-icons/lu";
import { BsArrowRepeat } from "react-icons/bs";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiShieldCheckFill } from "react-icons/pi";
import { MdOutlineSwipe } from "react-icons/md";

import { useCallback, useRef } from "react";
import BenefitContent from "./BenefitContent";

const StyledBenefits = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;

  & .swiper:not(.mySwiper-not) {
    width: 240px;
    height: 320px;
    margin: 0;
    overflow: visible;
  }

  & .swiper-slide {
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  & .swiper-slide {
    background: var(--color-dark-secondary);
    overflow: hidden;
  }
  & .mySwiper-not {
    pointer-events: none;
  }
  & .swiper-slide:not(.not) {
    border: 1px var(--color-white) solid;
  }

  /* & .swiper-slide:nth-child(odd) {
    background: var(--color-dark-secondary);
  }

  & .swiper-slide:nth-child(even) {
    background: var(--color-dark-label);
  } */
`;

const SliderContainer = styled.div`
  text-align: center;
  width: auto;
  overflow: hidden;

  @media (min-width: 760px) {
    width: 720px;
  }
`;

const BorderedContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 2rem 0;
  border: 1px var(--color-white) solid;
  border-radius: 1rem;
  overflow: hidden;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  @media (min-width: 760px) {
    width: 50%;
  }
`;

const SwipeMessage = styled.p`
  display: inline-flex;
  align-items: center;
  color: var(--color-primary);
  font-size: 0.85rem;
  margin: 0;

  & svg {
    margin-left: 0.25rem;
  }
`;

const items = [
  {
    id: 1,
    heading: "ارسال رایگان",
    content: `ارسال رایگان برای سفارش های بالای ${formatCurrency(2000000)}!`,
    icon: <LuTruck />,
    description:
      "معمولا جمع کردن پول برای خرید یک محصول کار سختی است، و اینکه بخواهیم پول ارسال محصول به درب منزلمان را هم بپردازیم کار را سخت تر میکند، ولی دیگر نیازی به نگرانی نیست، با این ویژگی فروشگاه ما، بیخیال پرداخت پول ارسال محصول شوید!",
  },
  {
    id: 2,
    heading: "بازگشت رایگان",
    content: "بازگشت کامل پول در صورت وجود مشکل!",
    icon: <BsArrowRepeat />,
    description:
      "این کاملا طبیعی است که بعد از خرید یک محصول امکان پشیمانی از خرید وجود داشته باشد، در این صورت ممکن است ناراحت و عصبانی شویم که چرا این محصول را خریدیدم، اما دیگر نیازی به استرس و پشیمانی نیست، زیرا اگر به هر دلیل از خرید خود پشیمان شدید، میتوانید آن را به صورت رایگان برای ما برگردانید!",
  },
  {
    id: 3,
    heading: "خرید ایمن",
    content: "بدون هیچ نگرانی و با خیال راحت خرید کنید!",
    icon: <PiShieldCheckFill />,
    description:
      "از وقتی که خرید الکترونیکی رایج شده، خیلی از مردم به این روش از خرید روی آورده اند، اما بسیاری هم هستند که هنوز از این روش اطمینان خاطر ندارد و میترسند پولشان دزدیده و یا به هدر رود. ولی دیگر نیازی به ترس نیست و شما میتوانید در کمال آرامش از سایت ما خریداری کنید. نگران نباشید، به ما اعتماد کنید!",
  },
  {
    id: 4,
    heading: "بهترین قیمت",
    content: "با کمترین قیمت کالایی با بیشترین کیفیت را بخرید!",
    icon: <LiaMoneyBillWaveSolid />,
    description:
      "وقتی وارد فروشگاهی میشوید، محصولات مختلف را با قیمت های مختلف میبینید، اما معمولا قیمت ها بسیار گران و عجیب و غریب هستند، و این ممکن است مشتری را از خرید محصول منصرف کند. ما تضمین میکنیم که محصولات ما همه در بهترین حالت ممکن، بهترین قیمت نسبت به بازار را دارند، باور نمیکنید؟ کافیست نگاهی کوتاه به محصولات ما بیندازید!",
  },
];

const Benefits = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <StyledBenefits>
      <Container>
        <BorderedContainer>
          <ContentContainer>
            <Swiper
              ref={sliderRef}
              effect={"fade"}
              grabCursor={true}
              loop={false}
              slidesPerGroupSkip={1}
              modules={[EffectFade, Navigation]}
              className="mySwiper mySwiper-not"
            >
              {items.map((item) => (
                <SwiperSlide key={item.id} className="not">
                  <BenefitContent item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ContentContainer>
          <SliderContainer>
            <Slider
              effect={"cards"}
              grabCursor={true}
              loop={false}
              slidesPerGroupSkip={1}
              modules={[EffectCards]}
              className="mySwiper"
              onSlideChange={({ activeIndex, previousIndex }) => {
                if (activeIndex - previousIndex === -1) {
                  handlePrev();
                }
                if (activeIndex - previousIndex === 1) {
                  handleNext();
                }
              }}
              // onSwiper={(swiper) => console.log(swiper)}
              items={items}
              render={(item) => (
                <SwiperSlide key={item.id}>
                  <BenefitItem item={item} />
                </SwiperSlide>
              )}
            />
            <SwipeMessage>
              <MdOutlineSwipe /> بکشید!
            </SwipeMessage>
          </SliderContainer>
        </BorderedContainer>
      </Container>
    </StyledBenefits>
  );
};

export default Benefits;
