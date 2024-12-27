import { LuX } from "react-icons/lu";
import styled, { css, keyframes } from "styled-components";
import { lg, md, sm } from "../../styles/GlobalStyles";
import { useRef, useState } from "react";
import { useSearch } from "./useSearch";
import Spinner from "../../ui/Spinner";
import { useIsUser } from "../../hooks/useIsUser";

import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { MdOutlineWatchOff } from "react-icons/md";
import SearchItem from "./SearchItem";

const fadein = keyframes`
    0% {
        opacity: 0;
        visibility: hidden;
    }
    100% {
        opacity: 1;
        visibility: visible;
    }
`;
const fadeout = keyframes`
    0% {
        opacity: 1;
        visibility: visible;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
`;

const SearchBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  animation-fill-mode: forwards;
  ${({ show = false }) =>
    show
      ? css`
          animation-name: ${fadein};
          animation-duration: 0.5s;
        `
      : css`
          animation-name: ${fadeout};
          animation-duration: 0.5s;
        `}
`;

const SearchInput = styled.input.attrs({ type: "text" })`
  font-family: "Tanha";
  outline: none;
  padding: 0 1rem;
  font-size: 1rem;
  padding: 1rem;
  color: var(--color-white);
  background-color: var(--color-dark);
  border: none;
  border: 2px solid var(--color-dark-secondary);
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  width: inherit;
`;

const SearchButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 1rem 0.5rem;
  color: var(--color-white);
  font-size: 1.25rem;
  background-color: var(--color-dark);
  border: 2px solid var(--color-dark-secondary);
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  width: min-content;
  height: 62px;

  @media ${lg} {
    height: 63px;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 28rem;
`;

const ResultContainer = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  width: 100%;
  background-color: #131215e6;
  height: 28rem;
  overflow-y: scroll;
`;

const WatchesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1246px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: var(--color-primary);

  & svg {
    width: 8rem;
    height: 8rem;
  }
`;

const Search = ({ showSearchBar, setShowSearchBar }) => {
  const ref = useRef("");
  const { search, isLoading } = useSearch();
  const [searchedWatches, setSearchedWatches] = useState([]);

  const isUser = useIsUser();
  let timeOut = useRef();

  const handleChange = () => {
    if (ref.current?.value?.trim() === "") {
      return;
    } else {
      clearTimeout(timeOut);

      timeOut = setTimeout(
        () =>
          search(ref.current?.value?.trim(), {
            onSuccess: (data) => {
              setSearchedWatches(data);
            },
          }),
        1000
      );
    }
  };

  return (
    <>
      <SearchBar show={showSearchBar}>
        <SearchInput
          placeholder="جستوجو کنید..."
          type="text"
          ref={ref}
          onChange={handleChange}
        />
        <SearchButton
          onClick={() => {
            setShowSearchBar(false);
            ref.current.value = "";
          }}
        >
          <LuX />
        </SearchButton>
        {ref.current?.value?.trim().length > 0 ? (
          <>
            <ResultContainer>
              {isLoading ? (
                <Loading>
                  <Spinner size={170} />
                </Loading>
              ) : ref.current?.value?.trim().length < 3 ? (
                <Error>
                  <PiMagnifyingGlassDuotone />
                  <h2>برای جست و جو حداقل 3 حرف وارد کنید!</h2>
                </Error>
              ) : searchedWatches?.length > 0 ? (
                <WatchesContainer>
                  {searchedWatches.map((item, index) => (
                    <SearchItem key={index} item={item} isUser={isUser} />
                  ))}
                </WatchesContainer>
              ) : (
                <Error>
                  <MdOutlineWatchOff />
                  <h2>ساعتی با این نام پیدا نشد!</h2>
                </Error>
              )}
            </ResultContainer>
          </>
        ) : null}
      </SearchBar>
    </>
  );
};

export default Search;
