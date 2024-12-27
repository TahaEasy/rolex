import { SwiperSlide } from "swiper/react";
import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import Slider from "../../ui/Slider";
import TableItem from "../watches/TableItem";
import { useWatches } from "../watches/useWatches";
import Spinner from "../../ui/Spinner";
import { useIsUser } from "../../hooks/useIsUser";
import styled from "styled-components";
const items = [
  {
    id: 1,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 500000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/1.png",
  },
  {
    id: 2,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 1500000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/14.png",
  },
  {
    id: 3,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 2000000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/13.png",
  },
  {
    id: 4,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 5250000,
    discount: 20,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/12.png",
  },
  {
    id: 5,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 1350000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/11.png",
  },
  {
    id: 6,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 2850000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/7.png",
  },
];

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PopularWatches = () => {
  const isUser = useIsUser();
  const { watches = [], isLoading } = useWatches(10, 14);
  return (
    <Container>
      <SectionHeader
        heading="مجموعه های ویژه"
        content="در اینجا برخی از محصولاتی که در فروشگاه ها محبوب هستند قرار گرفته، ما بهترین قیمت ها را برای ساعت شما ارائه می دهیم"
      />
      {isLoading ? (
        <Loading>
          <Spinner size={200} />
        </Loading>
      ) : (
        <Slider
          items={watches}
          render={(item) => (
            <SwiperSlide
              key={item.id}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <TableItem item={item} isUser={isUser} />
            </SwiperSlide>
          )}
          autoOpt={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
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
        />
      )}
    </Container>
  );
};

export default PopularWatches;
