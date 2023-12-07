export const calculateUsersOnPage = (currentPage, USERS_PER_PAGE, data, searchQuery) => {
    const startIndex = currentPage * USERS_PER_PAGE;
    const endIndex = startIndex + USERS_PER_PAGE;

    const filteredUsers = data.filter((user) => {
        const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
        return fullName.includes(searchQuery.toLowerCase());
      });

    const len = filteredUsers.length;

    const usersOnPage = filteredUsers.slice(startIndex, endIndex);
      
  
    return (
        {len,usersOnPage}
    )
  };
  