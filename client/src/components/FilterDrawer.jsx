import React, { useState, useEffect } from 'react';

//MUI
import {
  styled,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Checkbox,
  Box,
  Button,
} from '@mui/material';

//data
import mockUserData from '../data/heliverse_mock_data.json';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, changePage } from '../redux/actions';

const StyledList = styled(List)`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 250px;
`;

const DrawerHeading = styled(Typography)`
  background-color: #9754CB;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled(IconButton)`
  background-color: #ff471a;
  border-radius: 10px;
  :hover {
    background: red;
  }
`;

const FilterButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  :hover {
    background: #45a049;
  }
`;

const ClearButton = styled(Button)`
  background-color: #f44336;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  :hover {
    background: #d32f2f;
  }
`;

const FilterCategory = styled(ListItemText)`
  && {
    font-weight: 1000;
    margin-bottom: 5px;
  }
`;


const FilterList = styled(Box)`
  margin-left: 20px;
`;

const FilterDrawer = ({ onClose, onApplyFilter }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [selectedGender, setSelectedGender] = useState(filters.gender);
  const [selectedDomains, setSelectedDomains] = useState(filters.domain);
  const [selectedAvail, setSelectedAvail] = useState(filters.available);

  useEffect(() => {
    setSelectedGender(filters.gender);
    setSelectedDomains(filters.domain);
    setSelectedAvail(filters.available);
  }, [filters]);

  const genders = Array.from(new Set(mockUserData.map((user) => user.gender)));
  const domains = Array.from(new Set(mockUserData.map((user) => user.domain)));

  const handleGenderChange = (gender) => {
    const updatedGender = selectedGender.includes(gender)
      ? selectedGender.filter((selectedGender) => selectedGender !== gender)
      : [...selectedGender, gender];

    setSelectedGender(updatedGender);
  };

  const handleDomainChange = (domain) => {
    const updatedDomains = selectedDomains.includes(domain)
      ? selectedDomains.filter((selectedDomain) => selectedDomain !== domain)
      : [...selectedDomains, domain];

    setSelectedDomains(updatedDomains);
  };

  const handleAvailChange = (avail) => {
    setSelectedAvail(avail);
  };

  const handleApplyFilter = () => {
    const updatedFilters = { gender: selectedGender, domain: selectedDomains, available: selectedAvail === 'true' };
    dispatch(setFilters(updatedFilters));
    dispatch(changePage(0));
    onClose();
  };

  const handleClearFilters = () => {
    dispatch(setFilters({ gender: [], domain: [], available: null }));
    onClose();
  };

  return (

    <StyledList>

      <DrawerHeading variant="h6">
        Filter by
        <CloseButton onClick={onClose}>X</CloseButton>
      </DrawerHeading>

      <ListItemButton sx={{ cursor: 'auto' }}>

        <Checkbox
          checked={selectedAvail === 'true'}
          onChange={() => handleAvailChange('true')}
        />

        <ListItemText>Available</ListItemText>

      </ListItemButton>

      <FilterList>

        <FilterCategory>Gender</FilterCategory>

        {genders.map((gender) => (
          <ListItemButton
            key={gender}
            sx={{ cursor: 'auto' }}
          >

            <Checkbox
              checked={selectedGender.includes(gender)}
              onChange={() => handleGenderChange(gender)}
            />

            <ListItemText>{gender}</ListItemText>

          </ListItemButton>

        ))}
      </FilterList>

      <FilterList>

        <FilterCategory>Domain</FilterCategory>
        
        {domains.map((domain) => (
          <ListItemButton
            key={domain}
            sx={{ cursor: 'auto' }}
          >

            <Checkbox
              checked={selectedDomains.includes(domain)}
              onChange={() => handleDomainChange(domain)}
            />

            <ListItemText>{domain}</ListItemText>

          </ListItemButton>
        ))}


      </FilterList>

      <FilterButton onClick={handleApplyFilter}>Apply Filter</FilterButton>
      <ClearButton onClick={handleClearFilters}>Clear Filters</ClearButton>

    </StyledList>
  );
};

export default FilterDrawer;
