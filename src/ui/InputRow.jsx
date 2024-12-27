import styled from "styled-components";

const StyledInputRow = styled.div`
  text-align: start;
  margin: 0.5rem 0;
`;

const Label = styled.p`
  font-size: 0.85rem;
  color: var(--color-white);
  margin: 0;
`;
const Error = styled.p`
  font-size: 0.9rem;
  color: var(--color-danger);
  margin: 0;
`;

const InputRow = ({ children, label, error }) => {
  return (
    <StyledInputRow>
      <Label>{label}</Label>
      {children}
      <Error>{error !== "" ? error : ""}</Error>
    </StyledInputRow>
  );
};

export default InputRow;
