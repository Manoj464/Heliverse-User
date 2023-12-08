export const calculateUsersOnPage = (currentPage, USERS_PER_PAGE, data, searchQuery, filters) => {
  const startIndex = currentPage * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;

  const filteredUsers = data.filter((user) => {

    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();

    const availableFilter = filters["available"] !== null ? user.available === filters["available"] : true;

    const genderFilter = filters["gender"] && filters["gender"].length > 0
      ? filters["gender"].includes(user.gender)
      : true;
      
    const domainFilter = filters["domain"] && filters["domain"].length > 0
      ? filters["domain"].includes(user.domain)
      : true;

    return fullName.includes(searchQuery.toLowerCase()) && availableFilter && genderFilter && domainFilter;
  });

  const len = filteredUsers.length;
  const usersOnPage = filteredUsers.slice(startIndex, endIndex);

  return {
    len,
    usersOnPage
  };
};
