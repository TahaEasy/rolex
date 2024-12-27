import styled, { css } from "styled-components";
import { md } from "../styles/GlobalStyles";
const Heading = styled.h1`
  margin: 0;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      text-align: center;
      font-size: 0.65rem;
      font-weight: 400;
      @media (min-width: 376px) {
        font-size: 1rem;
        font-weight: 500;
      }
    `}
`;

export default Heading;
