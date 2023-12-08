const initialState = {
  currentPage: 0,
  searchQuery: '',
  filters: {
    available: null,
    gender: [],
    domain: [],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };

    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
      
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
      
    default:
      return state;
  }
};

export default rootReducer;
