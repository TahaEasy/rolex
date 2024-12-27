import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Tanha";
  position: relative;
  border: none;
  outline: none;
  padding: 0.5rem 0;
  margin: 0.75rem 0;
  font-size: 1rem;
  color: var(--color-white);
  text-decoration: none;
  background-color: var(--color-primary);
  width: 100%;
  border-radius: 4px;
  cursor: pointer;

  &:hover::after {
    width: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    height: 3px;
    width: 100%;
    transform: translateX(-50%);
    border-radius: 999px;
    background-color: var(--color-primary);
    transition: all 0.25s;
  }
`;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Tanha";
  position: relative;
  border: none;
  outline: none;
  padding: 0.5rem 0;
  margin: 0.75rem 0;
  font-size: 1rem;
  color: var(--color-white);
  text-decoration: none;
  background-color: var(--color-primary);
  width: 100%;
  border-radius: 4px;
  cursor: pointer;

  &:hover::after {
    width: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    height: 3px;
    width: 100%;
    transform: translateX(-50%);
    border-radius: 999px;
    background-color: var(--color-primary);
    transition: all 0.25s;
  }
`;

const ButtonBox = ({ to = undefined, ...props }) => {
  return to ? <LinkButton to={to} {...props} /> : <Button {...props} />;
};

export default ButtonBox;
