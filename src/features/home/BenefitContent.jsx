import styled from "styled-components";

const StyledBenefitContent = styled.div`
  padding: 1rem;
  text-align: center;

  @media (min-width: 760px) {
    text-align: right;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-primary);
`;

const Heading = styled.h2`
  display: block;
  color: var(--color-primary);
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 0.5rem;

  @media (min-width: 760px) {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  & span {
    margin-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;

    @media (min-width: 760px) {
      margin-left: 1rem;
    }
  }
`;

const HeadingP = styled.p`
  font-size: 1rem;
  color: var(--color-white);
`;

const P = styled.p`
  font-size: 0.85rem;
`;

const BenefitContent = ({ item: { heading, icon, content, description } }) => {
  return (
    <StyledBenefitContent>
      <Heading>
        <span>{icon}</span>
        {heading}
      </Heading>
      <HeadingP>{content}</HeadingP>
      <Divider />
      <P>{description}</P>
    </StyledBenefitContent>
  );
};

export default BenefitContent;
