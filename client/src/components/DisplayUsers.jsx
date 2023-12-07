import React, { useState } from 'react';

//MUI
import { Box, Typography, Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';

import mockUserData from '../data/heliverse_mock_data.json'; 

const USERS_PER_PAGE = 20;

const DisplayUsers = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = (currentPage) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;

  const usersOnPage = mockUserData.slice(startIndex, endIndex);

  return (
    <Box>
      <Typography variant="h5">User Details</Typography>
      {usersOnPage.map((user) => (
        <Box key={user.id}>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={user.avatar}
        title="avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="h6" component="div">
          Email: {user.email}
        </Typography>
        <Typography variant="h6" component="div">
          Domain: {user.domain}
        </Typography>
        <Typography variant="h6" component="div">
          Available: {user.available ? 'Yes' : 'No'}
        </Typography>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
          <hr />

        </Box>
      ))}

      {/* Pagination controls */}
      {/**Use < > << >> buttons later*/}
      <Box>
      <button onClick={() => setCurrentPage(currentPage - 5)} disabled={currentPage < 5}>
          -5
        </button>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
          -1
        </button>
        <span> Page {currentPage} </span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= mockUserData.length}>
          +1
        </button>
        <button onClick={() => setCurrentPage(currentPage + 5)} disabled={currentPage >= (mockUserData.length / USERS_PER_PAGE) - 5}>
          +5
        </button>
      </Box>
    </Box>
  );
};

export default DisplayUsers;
