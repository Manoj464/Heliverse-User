import React from 'react';

//MUI
import { Box, Typography, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

//components
import PageNav from './PageNav';
import SearchUser from './SearchUsers';

//data
import mockUserData from '../data/heliverse_mock_data.json';

//redux
import { useSelector } from 'react-redux';
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
  const filters = useSelector((state) => state.filters);

  const usersOnPage = calculateUsersOnPage(currentPage, USERS_PER_PAGE, mockUserData, searchQuery, filters).usersOnPage;

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
                Gender: {user.gender}
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
