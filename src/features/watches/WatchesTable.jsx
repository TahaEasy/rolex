import styled from "styled-components";
import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import Sort from "./Sort";
import TableItem from "./TableItem";
import { lg, md, sm, xl, xs } from "../../styles/GlobalStyles";
import { useWatches } from "./useWatches";
import Spinner from "../../ui/Spinner";
import { useIsUser } from "../../hooks/useIsUser";

const StyledWatchesTable = styled.div`
  margin: 0;
  @media ${xs} {
    margin: 2rem 0;
  }
`;

const Table = styled.div`
  margin: 2rem 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  @media ${md} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${lg} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1380px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const items = [
  {
    id: 1,
    name: "آنالوگ سیلیکونی گرد برکلی مردانه 42 مدل 15968JS-3",
    price: 500000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/1.png",
  },
  {
    id: 2,
    name: "کاسیو مدل MTP-VD02L-7EUDF",
    price: 1500000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/2.png",
  },
  {
    id: 3,
    name: "کاسیو مدل MTP-V002G-1BUDF",
    price: 2000000,
    discount: 20,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/3.png",
  },
  {
    id: 4,
    name: "دیجیتال مردانه کاسیو مدل F-94WA-8DG",
    price: 5250000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/4.png",
  },
  {
    id: 5,
    name: "کاسیو مدل GA-B2100C-9ADR",
    price: 1350000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/5.png",
  },
  {
    id: 6,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 42200000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/6.png",
  },
  {
    id: 7,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 3450000,
    discount: 10,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/7.png",
  },
  {
    id: 8,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 1000000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/8.png",
  },
  {
    id: 9,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 1000000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/9.png",
  },
  {
    id: 10,
    name: "مشکی/قهوه ای جیر چرم برکلی 38",
    price: 1000000,
    discount: 0,
    description:
      "ساعت آنالوگ لوکس با روکش طلا، دارای 3 عقربه با اعداد رومی، پشت آن گرد خمیده با روکش نقره. کنترل کننده پین کش",
    image: "/images/watches/10.png",
  },
];

const WatchesTable = () => {
  const isUser = useIsUser();
  const { watches = [], isLoading } = useWatches();

  return (
    <StyledWatchesTable>
      <Container>
        <SectionHeader
          heading="محبوب در فروشگاه"
          content="در اینجا برخی از محصولاتی هستند که به سرعت در فروشگاه ها محبوب هستند،
          ما بهترین قیمت ها را برای ساعت شما ارائه می دهیم"
        >
          <Sort />
        </SectionHeader>
        {isLoading ? (
          <SpinnerContainer>
            <Spinner size={200} />
          </SpinnerContainer>
        ) : (
          <Table>
            {watches.map((item) => (
              <TableItem key={item.id} item={item} isUser={isUser}>
                {item.name}
              </TableItem>
            ))}
          </Table>
        )}
      </Container>
    </StyledWatchesTable>
  );
};

export default WatchesTable;
