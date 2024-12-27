import styled, { css, keyframes } from "styled-components";
import { sm } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

const hide = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Button = styled(Link).attrs({ to: "/" })`
  display: inline-block;
  text-decoration: none;
  position: relative;
  font-family: "Tanha";
  color: var(--color-white);
  background-color: var(--color-secondary);

  ${({ type }) =>
    type === "sm" &&
    css`
      padding: 0.25rem 0.75rem;
      font-size: 0.4rem;
    `}
  ${({ type }) =>
    type === "md" &&
    css`
      padding: 0.25rem 1rem;
      font-size: 0.75rem;
    `}

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;

    height: 100%;
    width: 70%;
    transition: all 0.5s;
  }

  &::before {
    ${({ type }) =>
      type === "sm" &&
      css`
        bottom: -4px;
        left: -4px;
      `}
    ${({ type }) =>
      type === "md" &&
      css`
        bottom: -7px;
        left: -7px;
      `}
    border-bottom: 1px var(--color-secondary) solid;
    border-left: 1px var(--color-secondary) solid;
  }
  &::after {
    ${({ type }) =>
      type === "sm" &&
      css`
        top: -4px;
        right: -4px;
      `}
    ${({ type }) =>
      type === "md" &&
      css`
        top: -7px;
        right: -7px;
      `}
    border-top: 1px var(--color-secondary) solid;
    border-right: 1px var(--color-secondary) solid;
  }

  &:hover::after,
  &:hover::before {
    width: 0;
    height: 0;
    animation-name: ${hide};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @media ${sm} {
    ${({ type }) =>
      type === "sm" &&
      css`
        padding: 0.25rem 1rem;
        font-size: 0.85rem;
        font-weight: 600;
      `}
    ${({ type }) =>
      type === "md" &&
      css`
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      `}
  }
`;

Button.defaultProps = {
  type: "md",
};

export default Button;
