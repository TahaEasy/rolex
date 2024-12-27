import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import styled from "styled-components";

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 3rem;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-white);
`;

const Heading = styled.p`
  text-align: center;
  margin-top: 0;
  color: var(--color-primary);
`;

const P = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 0 0.5rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const NavigationButton = styled.button`
  background-color: transparent;
  color: var(--color-white);
  padding: 0.75rem;
  border: 1px var(--color-white) solid;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: var(--color-primary);
  }
`;

const Img = styled.img`
  height: 8rem;
  width: 100%;
`;

const BenefitItem = ({ item }) => {
  return (
    <div>
      <HeadingContainer>
        <Divider />
        <Icon>{item.icon}</Icon>
        <Divider />
      </HeadingContainer>
      <Heading>{item.heading}</Heading>
      <P>{item.content}</P>
      <Divider />
      <Img src="/images/special-watches/3.jpg" />
    </div>
  );
};

export default BenefitItem;
