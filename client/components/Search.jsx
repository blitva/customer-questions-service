import React, { useState } from 'react';
import styled from 'styled-components';
import icons from '../images/icons.png';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon></SearchIcon>
      <SearchForm
        type='search'
        maxlength='150'
        autocomplete='off'
        placeholder='Have a question? Search for answers'
        value={searchTerm}
        onChange={handleChange}
      >
      </SearchForm>
    </SearchContainer>
  )
}

export default Search;

// Styles
const SearchContainer = styled.div`
  height: 31px;
  width: 800px;
  font-size: 14px;
  position: relative;
  display: inline-block;
  margin-bottom: 12px;
`;

const SearchIcon = styled.i`
  width: 13px;
  height: 13px;
  position: absolute;
  top: 50%;
  margin-top: -7px;
  left: 10px;
  opacity: 1;
  background-position: -271px -86px;
  display: inline-block;
  vertical-align: top;
  background-size: 400px 900px;
  background-reapeat: no-repeat;
  background-image: url(${icons});
`;

const SearchForm = styled.input`
  height: 31px;
  width: 100%;
  padding: 3px 25px 3px 29px;
  cursor: default;
  font-weight: 400l
`;