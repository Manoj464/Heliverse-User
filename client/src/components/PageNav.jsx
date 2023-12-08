import React from 'react';

//MUI
import { Box, Button } from '@mui/material';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../redux/actions';
import { calculateUsersOnPage } from '../utils/utils';

//data
import mockUserData from '../data/heliverse_mock_data.json';

const PageNav = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalUsers = useSelector((state) => calculateUsersOnPage(state.currentPage, 20, mockUserData, state.searchQuery,state.filters)).len;

  const handlePageChange = (newPage) => {
    dispatch(changePage(newPage));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        bottom: '0px',
        backgroundColor: '#ffff80',
      }}
    >


      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FF4081',
          color: '#fff',
          margin: '10px',
          '&:disabled': {
            backgroundColor: '#e0e0e0',
            color: '#a0a0a0',
            margin: '10px'
          },
        }}
        onClick={() => handlePageChange(currentPage - 5)}
        disabled={currentPage < 5}
      >
        &lt;&lt;
      </Button>


      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FF4081',
          color: '#fff',
          margin: '10px',
          '&:disabled': {
            backgroundColor: '#e0e0e0',
            color: '#a0a0a0',
            margin: '10px'
          },
        }}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        &lt;
      </Button>


      <span style={{ margin: '0 10px', fontSize: '1.2rem' }}>Page {currentPage}</span>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FF4081',
          color: '#fff',
          margin: '10px',
          '&:disabled': {
            backgroundColor: '#e0e0e0',
            color: '#a0a0a0',
            margin: '10px'
          },
        }}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= Math.ceil(totalUsers / 20) - 1}
      >
        &gt;
      </Button>


      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FF4081',
          color: '#fff',
          margin: '10px',
          '&:disabled': {
            backgroundColor: '#e0e0e0',
            color: '#a0a0a0',
            margin: '10px'
          },
        }}
        onClick={() => handlePageChange(currentPage + 5)}
        disabled={currentPage >= Math.ceil(totalUsers / 20) - 5}
      >
        &gt;&gt;
      </Button>

      
    </Box>
  );
};

export default PageNav;
