import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  width: 190px;
`;

const Heading = styled.h1`
  position: relative;
  margin-top: 0;
  padding-bottom: 5px;
  font-size: 1.5rem;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 3rem;
    height: 2px;
    background-color: var(--color-secondary);

    @media (min-width: 681px) {
      transform: none;
      right: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: var(--color-white);
  text-decoration: none;
  padding: 5px 0;
  transition: all 0.25s;

  &:hover {
    padding-right: 7px;
    color: var(--color-primary);
  }
`;

const FooterColumn = ({ col: { heading, items } }) => {
  return (
    <div>
      <Heading>{heading}</Heading>
      <Menu>
        {items.map((item, index) => (
          <li key={index}>
            <StyledLink to={item.href}>{item.label}</StyledLink>
          </li>
        ))}
      </Menu>
    </div>
  );
};

export default FooterColumn;
