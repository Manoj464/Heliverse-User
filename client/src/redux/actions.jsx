export const changePage = (query) => ({
    type: 'SET_CURRENT_PAGE',
    payload: query,
  });
  
  export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
  });
  