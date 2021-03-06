import React, { useRef, memo } from 'react';

import { INavEventHandler } from '../../interfaces/interfaces';

import styled from 'styled-components';

function SearchBar({ onSearch, onLogoClick }: INavEventHandler): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleSearch = () => {
    const { value } = inputRef.current;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyledContainer>
      <StyledLogoContainer
        onClick={() => {
          onLogoClick();
        }}
      >
        <StyledImage src="/images/logo.png" />
        <StyledTitle>YongTube</StyledTitle>
      </StyledLogoContainer>
      <StyledInput
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
        ref={inputRef}
      ></StyledInput>
      <StyledButton type="submit" onClick={onClick} onKeyPress={onKeyPress}>
        검색
      </StyledButton>
    </StyledContainer>
  );
}

export default memo(SearchBar);

const StyledContainer = styled.header`
  display: flex;
  height: 4rem;
  padding: 0.8em 1em;
  background-color: black;
  color: white;
`;

const StyledImage = styled.img`
  margin-right: 2em;
  width: 3em;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
  cursor: pointer;
`;

const StyledTitle = styled.h1`
  font-size: 2em;
  font-weight: 700;
  margin-right: 2em;
`;

const StyledInput = styled.input`
  flex-basis: 100%;
  font-size: 1.2rem;
  outline: none;
`;

const StyledButton = styled.button`
  width: 10em;
  margin-left: 1em;
  background-color: darkGray;
  font-size: 1.3em;
  border-radius: 0.2em;

  &:active {
    opacity: 0.8;
  }
`;
