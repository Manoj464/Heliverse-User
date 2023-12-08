import React, { useState } from 'react';

//MUI
import { Box, InputBase, Drawer, IconButton, styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//redux
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/actions';

//components
import FilterDrawer from './FilterDrawer';

const SearchComponent = styled(Box)`
  background: #9754CB;
  text-align: center;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;

  && .MuiTextField-root {
    width: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff0f0;
    border-radius: 30px;
    border-color: none;
  }
`;

const SearchBox = styled(InputBase)`
  padding: 5px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
  background: #fff0f0;
`;

const SearchUser = () => {
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    dispatch(setSearchQuery(searchText));
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (

    
    <SearchComponent>


      <IconButton
        onClick={handleDrawerOpen}
        sx={{
          cursor: 'pointer',
          color: '#fff',
        }}
      >
        <MenuIcon />
      </IconButton>


      <SearchBox
        placeholder="Search for User"
        onChange={handleSearchChange}
      />


      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <FilterDrawer onClose={handleDrawerClose}/>
      </Drawer>
    </SearchComponent>


  );

};

export default SearchUser;
