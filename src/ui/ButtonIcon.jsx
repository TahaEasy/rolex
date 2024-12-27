import styled from "styled-components";

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 0.5rem;

  & svg {
    height: 1.25rem;
    width: 1.25rem;
    transition: all 0.25s;
  }
  &:hover svg {
    color: var(--color-primary);
  }
  & .box {
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s;
  }
  &:hover .box {
    opacity: 1;
    visibility: visible;
    top: 40px;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--color-white);
  padding: 0;
`;

const Box = styled.div`
  position: fixed;
  background-color: var(--color-dark-secondary);
  box-shadow: 0 -6px 10px 0px rgb(255 255 255 / 0.1);
  padding: 1rem;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  z-index: 50;

  @media (min-width: 450px) {
    position: absolute;
    left: 0;
    top: 20px;
    transform: none;
  }
`;

const Tag = styled.span`
  position: absolute;
  background-color: var(--color-primary);
  border-radius: 99px;
  font-size: small;
  width: 1.25rem;
  height: 1.25rem;
  top: -1rem;
  right: -10px;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px var(--color-white) dashed;
  padding-bottom: 5px;
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  margin: 0;
`;

const ButtonIcon = ({
  icon,
  boxContent = null,
  boxHeading = null,
  boxSup = null,
  tagContent = null,
  ...props
}) => {
  return (
    <Span>
      <Button {...props}>{icon}</Button>
      {boxContent ? (
        <Box className="box">
          {boxHeading && tagContent ? (
            <StyledHeadingContainer>
              <Heading>{boxHeading}</Heading>
              {boxSup ? <span>{boxSup}</span> : null}
            </StyledHeadingContainer>
          ) : null}
          {boxContent}
        </Box>
      ) : null}
      {tagContent ? <Tag>{tagContent}</Tag> : null}
    </Span>
  );
};

export default ButtonIcon;
