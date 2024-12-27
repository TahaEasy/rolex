import styled from "styled-components";
import ButtonBox from "./ButtonBox";

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const EmptyContainer = styled.div`
  width: 17rem;
  text-align: center;
`;

const Img = styled.img`
  height: 3rem;
`;

const P = styled.p`
  color: var(--color-primary);
`;

const Empty = ({ resourceName, to, helperLink }) => {
  return (
    <StyledEmpty>
      <EmptyContainer>
        <div>
          <Img src="/svg/box.svg" alt="خالی..." />
        </div>
        <p>{resourceName} شما خالی است!!!</p>
        <P>بیشتر کاوش کنید و موارد را فهرست کنید.</P>
        {to ? <ButtonBox to={to}>{helperLink}</ButtonBox> : null}
      </EmptyContainer>
    </StyledEmpty>
  );
};

export default Empty;
