import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCategoryItem = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: var(--color-dark);
  text-align: center;
  padding: 3rem 1rem 1rem;
`;

const Img = styled.img`
  width: 120px;
`;

const Divider = styled.div`
  position: relative;
  border-bottom: 1px var(--color-dark-label) solid;
  margin: 1rem 0;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    height: 10px;
    width: 10px;
    background-color: var(--color-dark-label);
    transform: translate(-50%, -50%);
  }
`;

const Heading = styled.p`
  color: var(--color-white);
  font-size: 0.75rem;
  margin: 0;
  margin-bottom: 4px;
`;
const Content = styled.p`
  color: var(--color-p);
  font-size: 0.75rem;
  margin: 0;
`;

const CategoryItem = ({ item: { src, alt, heading, description } }) => {
  return (
    <StyledCategoryItem>
      <div>
        <Img src={src} alt={alt} />
      </div>
      <Divider />
      <Heading>{heading}</Heading>
      <Content>{description}</Content>
    </StyledCategoryItem>
  );
};

export default CategoryItem;
