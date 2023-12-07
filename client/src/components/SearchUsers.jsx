import React from 'react';
import { Box, InputBase,styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/actions';

const SearchComponent = styled(Box)`
  background: #9754CB;
  text-align: center;
  position: sticky;
  top: 0;

  && .MuiTextField-root {
    width: 50%; 
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff0f0; 
    border-radius: 30px;
    border-color: none;
  }
`

const SearchBox = styled(InputBase)`
    width: 40%;
    padding: 5px 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 30px;
    background: #fff0f0;
`

const SearchUser = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    dispatch(setSearchQuery(searchText));
  };

  return (
    <SearchComponent>
      <SearchBox
        placeholder = "Search for User"
        onChange={handleSearchChange}
      />
    </SearchComponent>
  );
};

export default SearchUser;
