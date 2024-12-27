import styled from "styled-components";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

import { LuMapPin, LuPhone, LuMail, LuCopyright } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import {
  TbBrandPinterest,
  TbBrandTwitterFilled,
  TbBrandInstagram,
} from "react-icons/tb";

import Container from "./Container";
import { Link } from "react-router-dom";
import Button from "./Button";
import { lg } from "../styles/GlobalStyles";

const StyledFooter = styled.footer`
  position: relative;
  min-height: 362px;
  background-color: var(--color-dark);
  padding-top: 6rem;
  margin-top: 4rem;
  overflow: hidden;
  z-index: 1;

  & .not {
    position: static !important;
  }
`;

const Img = styled.img`
  width: 358px;
  height: 362px;
`;
const BgImgRContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;
const BgImgLContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media (min-width: 681px) {
    flex-direction: row;
    align-items: normal;
    text-align: start;
  }
`;

const ContactContainer = styled.div`
  order: -1;
  margin-bottom: 2rem;

  @media ${lg} {
    order: unset;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 681px) {
    justify-content: start;
  }
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  & svg {
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  & p {
    margin: 0.25rem 0;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 900;
  }

  @media (min-width: 681px) {
    justify-content: right;
  }
`;

const ContactLink = styled(Link)`
  color: var(--color-white);
  transition: all 0.25s;

  &:hover {
    color: var(--color-primary);
    transform: translateY(-10%);
  }

  & svg {
    font-size: 1.25rem;
  }
`;

const Heading = styled.h1`
  position: relative;
  margin-top: 0;
  padding-bottom: 5px;
  font-size: 1.5rem;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 3rem;
    height: 2px;
    background-color: var(--color-secondary);
    @media (min-width: 681px) {
      transform: none;
      right: 0;
    }
  }
`;

const FollowContainer = styled.div`
  order: -1;
  margin-bottom: 2rem;

  @media ${lg} {
    order: 5;
  }
`;

const NewsContainer = styled.div`
  margin-top: 1rem;
  & p {
    color: var(--color-secondary);
    margin: 0;
  }
  & h4 {
    margin: 0;
    max-width: 20rem;
  }
`;

const NewsFormContainer = styled.form`
  margin-top: 1rem;
`;

const NewsForm = styled.input.attrs({
  type: "text",
  placeholder: "آدرس ایمیل شما",
})`
  font-family: "Tanha";
  outline: none;
  border: none;
  height: 2rem;
  background-color: var(--color-dark-label);
  color: var(--color-white);
  padding: 0.25rem;
  font-size: 1rem;
  margin-left: 0.5rem;

  &::placeholder {
    color: var(--color-white);
  }
`;

const CopyrightContainer = styled.div`
  text-align: center;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-white);
  opacity: 0.5;
`;

const columns = {
  col1: {
    heading: "خرید کنید",
    items: [
      {
        label: "جدید",
        href: "/",
      },
      {
        label: "مردان",
        href: "/",
      },
      {
        label: "زنان",
        href: "/",
      },
      {
        label: "لوازم جانبی",
        href: "/",
      },
    ],
  },
  // COL 2
  col2: {
    heading: "اطلاعات",
    items: [
      {
        label: "صفحه اصلی",
        href: "/",
      },
      {
        label: "خرید",
        href: "/",
      },
      {
        label: "درباره ما",
        href: "/",
      },
      {
        label: "تماس با ما",
        href: "/",
      },
    ],
  },
  col3: {
    heading: " دریافت راهنما",
    items: [
      {
        label: "سفارشات شما",
        href: "/",
      },
      {
        label: "حساب شما",
        href: "/",
      },
      {
        label: "لیست علاقه مندی شما",
        href: "/",
      },
      {
        label: "جستوجو",
        href: "/",
      },
    ],
  },
};

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledFooter>
      <Container className="not">
        <BgImgRContainer>
          <Img src="/images/banners/bg-footer-r.png" />
        </BgImgRContainer>
        <BgImgLContainer>
          <Img src="/images/banners/bg-footer-l.png" />
        </BgImgLContainer>
        <MainContainer>
          <ContactContainer>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <ContactRow>
              <LuMapPin />
              <p>ایران، مازندران، نکا، انقلاب 20، اسفندیاری 4</p>
            </ContactRow>
            <ContactRow>
              <LuPhone />
              <p>98-9119595220+</p>
            </ContactRow>
            <ContactRow>
              <LuMail />
              <p>shamlytaha2@gmail.com</p>
            </ContactRow>
          </ContactContainer>
          <FooterColumn col={columns.col1} />
          <FooterColumn col={columns.col2} />
          <FooterColumn col={columns.col3} />
          <FollowContainer>
            <Heading>ما را دنبال کنید</Heading>
            <ContactRow>
              <ContactLink>
                <GrFacebookOption />
              </ContactLink>
              <ContactLink>
                <TbBrandInstagram />
              </ContactLink>
              <ContactLink>
                <TbBrandTwitterFilled />
              </ContactLink>
              <ContactLink>
                <TbBrandPinterest />
              </ContactLink>
            </ContactRow>
            <NewsContainer>
              <p>ثبت نام در خبرنامه</p>
              <h4>
                آخرین به‌روزرسانی‌های ما را درباره محصولات و تبلیغات ما دریافت
                کنید.
              </h4>
              <NewsFormContainer onSubmit={handleSubmit}>
                <NewsForm />
                <Button type="sm">اشتراک</Button>
              </NewsFormContainer>
            </NewsContainer>
          </FollowContainer>
        </MainContainer>
        <CopyrightContainer>
          <Divider />
          <p>
            <LuCopyright /> 1402 ساخته شده توسط طاها
          </p>
        </CopyrightContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
