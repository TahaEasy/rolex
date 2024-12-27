import styled from "styled-components";
import ButtonBox from "../ui/ButtonBox";

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const NotFoundContainer = styled.div`
  width: 17rem;
  text-align: center;
`;

const Img = styled.img`
  height: 10rem;
`;

const P = styled.p`
  color: var(--color-primary);
`;

const NotFound = ({ resourceName = "صفحه" }) => {
  return (
    <StyledNotFound>
      <NotFoundContainer>
        <div>
          <Img src="/svg/box.svg" alt="خالی..." />
        </div>
        <p>{resourceName} مورد نظر پیدا نشد!!!!</p>
        <P>
          احتمالا آدرس را به نادرستی وارد کرده اید! لطفا در نوشتار آن دقت کنید.
        </P>
        <ButtonBox to="/" replace={true}>
          بازگشت به صفحه اصلی
        </ButtonBox>
      </NotFoundContainer>
    </StyledNotFound>
  );
};

export default NotFound;
