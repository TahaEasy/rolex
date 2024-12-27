import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Tanha";
  position: relative;
  padding: 0.5rem 0;
  margin: 0.75rem 0;
  font-size: 1rem;
  color: var(--color-white);
  text-decoration: none;
  background-color: rgba(var(--color-primary-rgb), 0.05);
  border: 1px var(--color-primary) solid;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: var(--color-primary);
  }
`;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Tanha";
  position: relative;
  padding: 0.5rem 0;
  margin: 0.75rem 0;
  font-size: 1rem;
  color: var(--color-white);
  text-decoration: none;
  background-color: rgba(var(--color-primary-rgb), 0.05);
  border: 1px var(--color-primary) solid;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: var(--color-primary);
  }
`;

const ButtonNormal = ({ to = undefined, ...props }) => {
  return to ? <LinkButton to={to} {...props} /> : <Button {...props} />;
};

export default ButtonNormal;
