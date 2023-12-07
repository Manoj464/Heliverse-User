import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PageNav from './PageNav';
import SearchUser from './SearchUsers';
import mockUserData from '../data/heliverse_mock_data.json';
import { calculateUsersOnPage } from '../utils/utils';

const CardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  margin: '20px 30px',
  
}

const USERS_PER_PAGE = 20;

const DisplayUsers = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const searchQuery = useSelector((state) => state.searchQuery);

  const startIndex = currentPage * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;

  const usersOnPage = calculateUsersOnPage(currentPage, USERS_PER_PAGE, mockUserData, searchQuery).usersOnPage;

  return (
    <Box>
      <SearchUser />

      <Box
        sx={CardStyle}
      >
        {usersOnPage.map((user) => (
          <Card key={user.id} sx={{ maxWidth: 250, backgroundColor: '#4CAF50', color: '#fff' }}>
            <CardMedia sx={{ height: 140, backgroundColor: '#99ffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={user.avatar} alt="Avatar" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.first_name} {user.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Domain: {user.domain}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available: {user.available ? 'Yes' : 'No'}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <PageNav />
    </Box>
  );
};

export default DisplayUsers;
