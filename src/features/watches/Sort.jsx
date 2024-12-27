import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { xs } from "../../styles/GlobalStyles";

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  font-family: "Tanha";
  font-size: 0.85rem;
  border: none;
  background: transparent;
  padding-bottom: 0.3rem;
  ${({ active }) =>
    active === "true"
      ? css`
          color: var(--color-primary);
          border-bottom: 2px dashed var(--color-primary);
        `
      : css`
          color: var(--color-white);
          border-bottom: 2px dashed var(--color-white);
        `}
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.25s;

  &:hover {
    opacity: 1;
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }

  @media ${xs} {
    font-size: 1.125rem;
    border-bottom: none;
  }
`;

const Divider = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
`;

const Dash = styled.span`
  display: none;
  width: 5px;
  height: 1px;
  background-color: var(--color-primary);
  margin: 0 2px;

  @media ${xs} {
    display: inline;
  }
`;

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSort = (sort) => {
    searchParams.set("sortBy", sort);
    setSearchParams(searchParams);
  };
  const sortBy = searchParams.get("sortBy") || "last";

  return (
    <SortContainer>
      <Button
        onClick={() => setSort("last")}
        active={sortBy === "last" ? "true" : "false"}
      >
        آخرین محصولات
      </Button>
      <Divider>
        <Dash />
        <Dash />
        <Dash />
      </Divider>
      <Button
        onClick={() => setSort("mostSold")}
        active={sortBy === "mostSold" ? "true" : "false"}
      >
        پر فروش ترین
      </Button>
      <Divider>
        <Dash />
        <Dash />
        <Dash />
      </Divider>
      <Button
        onClick={() => setSort("special")}
        active={sortBy === "special" ? "true" : "false"}
      >
        محصولات ویژه
      </Button>
    </SortContainer>
  );
};

export default Sort;
